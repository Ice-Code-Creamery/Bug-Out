const dotenv = require('dotenv');
const Sequelize = require('sequelize');

dotenv.config();

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/BugOut', {
  logging: false,
});

module.exports = db;