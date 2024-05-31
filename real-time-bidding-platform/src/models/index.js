const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models here
db.User = require('./user')(sequelize, DataTypes);
db.Item = require('./item')(sequelize, DataTypes);
db.Bid = require('./bid')(sequelize, DataTypes);
db.Notification = require('./notification')(sequelize, DataTypes);

module.exports = db;
