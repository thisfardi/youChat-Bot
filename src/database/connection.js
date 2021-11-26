const {
   TestDB
   // ,ProductionDB
} = require("../config/config.js");
const Sequelize = require("sequelize");

// Test Database
const {
   database,
   user,
   password,
   host,
   dialect,
   logging,
   pool
} = TestDB;

// production Database
// const {
//    database, user, password, host, dialect, logging, pool
// } = ProductionDB;

// Database Connection
const sequelize = new Sequelize(database, user, password, {
   host,
   dialect,
   logging,
   pool
});

module.exports = sequelize;