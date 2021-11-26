module.exports.PORT = process.env.port || 2022;
module.exports.twilio = {
    accountSid: "",
    authToken: ""
};
module.exports.TestDB = {
    // Test Database
    database: "uchat",
    user: "root",
    password: "",
    host: "localhost",
    dialect: "mysql",
    logging: false,
    pool: {
        max: 30,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
module.exports.security = {
    token_secret: "TestCode"
};
module.exports.ProductionDB = {
    // Production Database
    database: "uchat",
    user: "root",
    password: "",
    host: "localhost",
    dialect: "mysql",
    logging: false,
    pool: {
        max: 30,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};