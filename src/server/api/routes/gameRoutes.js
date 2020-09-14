/* eslint-disable no-await-in-loop */
const { Router } = require('express');
const { models: { GameSession, Session, Prompt } } = require('../../db/index');
const codeGenerator = require('../utils');

const gameRouter = Router();

// getsCurrentGame and players belonging to that game
gameRouter.get('/current', async (req, res) => {
  try {
    const session = await Session.findOne({ where: { id: req.session_id } });
    const game = await GameSession.findOne({ where: { id: session.gameSessionId } });
    const players = await Session.findAll({ where: { gameSessionId: game.id } });
    res.status(201).send({ game, players });
  } catch (e) {
    console.log('Error finding current game');
    console.log(e);
  }
});

// finds a random game that is active and joins; if none, you create one

// the gameSession begins

// Create game session and set the number of rounds.
gameRouter.post('/createNew', async (req, res) => {
  try {
    let newCode = codeGenerator();
    let check = await GameSession.findOne({ where: { code: newCode } });
    while (check) {
      newCode = codeGenerator();
      check = await GameSession.findOne({ where: { code: newCode } });
    }
    const { rounds, difficulty } = req.body;
    const newGame = await GameSession.create({ rounds, difficulty, newCode });
    res.status(201).send(newGame);
  } catch (e) {
    console.log('Error creating game session');
    console.log(e);
  }
});

// Gets a game prompt based on difficulty
gameRouter.get('/prompt:difficulty', async (req, res) => {
  try {
    const { difficulty } = req.query;
    const gamePrompt = await Prompt.findOne({ where: difficulty });
    res.send(gamePrompt);
  } catch (e) {
    console.log('failed to get game prompt');
    console.log(e);
  }
});

// This route destroys the game belonging to the session and updates gameSessionId
gameRouter.put('/joinGame', async (req, res) => {
  try {
    const { currentGameId, gameCode } = req.body;
    const session = await Session.findOne({ where: { id: req.session_id } });
    const game = await GameSession.findOne({ where: { code: gameCode } });
    if (!game) {
      res.send(404);
    } else {
      await session.update({ gameSessionId: game.id });
      const gameToDestroy = await GameSession.findOne({ where: { id: currentGameId } });
      await gameToDestroy.destroy();
      res.status(200).send();
    }
  } catch (e) {
    console.log('failed to join game');
    console.log(e);
  }
});

module.exports = {
  path: '/game',
  router: gameRouter,
};
