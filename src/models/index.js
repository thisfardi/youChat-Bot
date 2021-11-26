const users = require("./users");
const media = require("./media");
const permissions = require("./permissions");
const webhooks = require("./webhooks");
const botResponse = require("./botRes");
const clientMsg = require("./clientMsg");
const botAutoResponse = require("./botAutoResponse");

module.exports = {
    usersModel: users,
    permissionsModel: permissions,
    mediaModel: media,
    webhooksModel: webhooks,
    botResponseModel: botResponse,
    clientMsgModel: clientMsg,
    botAutoResponseModel: botAutoResponse
}