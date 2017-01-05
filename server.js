const express = require('express');
const Sequelize = require('sequelize');
const sequelizeConnection = require('./sequelizeConnection');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', require('./routes'))

app.listen(3000);
