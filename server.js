const HTTP = require("http"),
    Application = require("./src/app"),
    Database = require("./src/database/connection"),
    Server_Config = require("./src/config/appProberty.json");

/*
    create the http server
*/
const HTTP_SERVER = HTTP.createServer(Application);

/*
    listen to port 2022
*/
HTTP_SERVER.listen(Server_Config.PORT);

module.exports = Application;