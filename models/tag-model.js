const Sequelize = require('sequelize');
const sequelizeConnection = require('../sequelize-connection');

const Tag = sequelizeConnection.define('tag', {
  title: {
    type: Sequelize.STRING,
    validate: {
      len: [1, 255]
    }
  },
  counter: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  }
})

module.exports = Tag;
