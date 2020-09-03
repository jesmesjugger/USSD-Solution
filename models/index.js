'use strict';
// has the logic for handling CRUD
var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
const config = require("../config/config.js");

var sequelize = new Sequelize(config.db, config.user,
  config.pass, { host: config.host, dialect: 'mysql', autoIncrement: true });
var db        = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
  })
  .forEach(function(file) {
    var model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

module.exports = db;
