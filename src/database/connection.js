import {
   Sequelize
} from "sequelize";
import {
   TestDB
   // ,ProductionDB
} from "../config/config.js";
const
// Test Database
{
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

export default sequelize;