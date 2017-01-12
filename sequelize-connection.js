const Sequelize = require('sequelize');

// const sequelizeConnection = new Sequelize('postgres://Quan@localhost:5432/queenslist');

// HEROKU
let sequelizeConnection = process.env.NODE_ENV === 'production' ? new Sequelize(process.env.DATABASE_URL) : new Sequelize('postgres://Quan@localhost:5432/queenslist');


sequelizeConnection
.authenticate()
.then((err) => console.log('Sequelize connection successful'))
.catch((err) => console.log('Unable to connect to the database:', err));

module.exports = sequelizeConnection;



