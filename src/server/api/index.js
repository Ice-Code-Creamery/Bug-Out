/* eslint-disable no-await-in-loop */
const { join } = require('path');
const { green } = require('chalk');
const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');
const asyncRedis = require('async-redis');
const {
  apiRouter,
  userRouter,
  gameRouter,
  sessionRouter,
} = require('./routes/index');
const db = require('../db/index');
const { app, server } = require('./socket');
const { codeGenerator } = require('./utils');

const redisClient = asyncRedis.createClient();

const {
  models: { Session, User, GameSession },
} = db;

const PORT = process.env.PORT || 3000;
const PUBLIC_PATH = join(__dirname, '../../../public');
const DIST_PATH = join(__dirname, '../../../dist');

app.use(cookieParser());

// assigns cookies
app.use(async (req, res, next) => {
  if (!req.cookies.session_id) {
    const session = await Session.create();
    const oneWeek = 1000 * 60 * 60 * 24 * 7;
    res.cookie('session_id', session.id, {
      path: '/',
      expires: new Date(Date.now() + oneWeek),
    });
    req.session_id = session.id;
    next();
  } else {
    console.time('Starting Finding User');
    req.session_id = req.cookies.session_id;

    let user;

    // TODO: On any user change, we would need to update this entry in redis as well.
    /*
      TODO: We can use redis's own expiry functionality to make sure that this expires after
       some amount of time, forcing us to re-retrieve the data from the database and make it
       fresh again. This will lead to an interimperiod during which, we will not be able to
       have fresh data about the user. Can only be done with set not hset
       - would require a change.
    */
    const redisResult = await redisClient.hget('bugout', req.session_id);

    if (!redisResult) {
      console.log('Postgres Lookup');
      user = await User.findOne({
        include: [
          {
            model: Session,
            where: { id: req.session_id },
          },
        ],
      });

      await redisClient.hset('bugout', req.session_id, JSON.stringify(user));
    } else {
      console.log('Redis Lookup');
      user = JSON.parse(redisResult);
    }

    console.log('Logged in User is: ', user.email);

    console.timeEnd('Starting Finding User');
    if (user) {
      req.user = user;
    }
    next();
  }
});

// assign games if they don't have
app.use(async (req, res, next) => {
  const session = await Session.findOne({ where: { id: req.session_id } });
  if (!session && req.cookies.session_id) {
    const newSession = await Session.create({ id: req.cookies.session_id });
    req.session_id = newSession.id;
    next();
  } else if (!session.gameSessionId) {
    let newCode = codeGenerator();
    // console.log(newCode)
    let check = await GameSession.findOne({ where: { code: newCode } });
    while (check) {
      newCode = codeGenerator();
      check = await GameSession.findOne({ where: { code: newCode } });
    }
    const newGame = await GameSession.create({ code: newCode });
    await Session.update(
      { gameSessionId: newGame.id },
      { where: { id: session.id } },
    );
    // console.log(newGame);
    next();
  }
  next();
});

app.use(express.static(PUBLIC_PATH));
app.use(express.static(DIST_PATH));
app.use(express.static(join(__dirname, '../../client/assets')));
app.use(cors());
app.use(express.json());
app.use('/api', apiRouter.router);
app.use('/user', userRouter.router);
app.use('/game', gameRouter.router);
app.use('/session', sessionRouter.router);

const startServer = () => new Promise((res) => {
  server.listen(PORT, () => {
    console.log(green(`server listening on port ${PORT}`));
    res();
  });
});

app.get('*', (req, res) => {
  res.sendFile(join(PUBLIC_PATH, './index.html'));
});

module.exports = {
  startServer,
  app,
};
