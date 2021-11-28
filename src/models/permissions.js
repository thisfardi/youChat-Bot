const sequelize = require("../database/connection");
const {
    DataTypes
} = require("sequelize");

const permissions = sequelize.define("permission", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV1
    },
    chat: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    manage_users: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    upload_media: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    webhooks: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    personal_token: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    connect_apps: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    send_emails: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    manage_bots: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    show_balance: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

permissions.sync({
    force: false
});

module.exports = permissions;