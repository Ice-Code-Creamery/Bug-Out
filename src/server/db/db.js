const dotenv = require('dotenv');
const Sequelize = require('sequelize');

<<<<<<< HEAD:server/db/models/db.js
dotenv.config();

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/BugOut', {
=======
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:jjf11ltf8@localhost:5432/BugOut', {
>>>>>>> bf7ee845c5e96223861fa154a29096ee3df2e374:src/server/db/db.js
  logging: false,
});

module.exports = db;