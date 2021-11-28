const sequelize = require("../database/connection");
const { DataTypes } = require("sequelize");
const users = require("./users");

var webhooks = sequelize.define("webhook", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV1
    },
    creator: {
        references: {
            model: users,
            key: "id"
        }
    },
    protocol: {
        type: DataTypes.STRING,
        allowNull: false
    },
    hostname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pathname: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "/"
    },
    query: {
        type: DataTypes.CHAR,
        allowNull: false
    }
});

webhooks.sync({
    force: false
});

module.exports = webhooks;