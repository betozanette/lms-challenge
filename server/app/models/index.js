import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import configJson from '../config/sequelize';

const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

const config = configJson[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);
let db = {};

fs.readdirSync(__dirname)
  .filter((file) => file !== 'index.js')
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes,
    );

    db[model.name] = model;
  });

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
