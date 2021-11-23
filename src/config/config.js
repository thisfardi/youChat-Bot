export const PORT = process.env.port || 2022;
export const twilio = {
    accountSid: "",
    authToken: ""
};
export const TestDB = {
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
export const security = {
    token_secret: "TestCode"
};
export const ProductionDB = {
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