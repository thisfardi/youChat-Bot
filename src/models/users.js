const sequelize = require("../database/connection");
const { DataTypes } = require("sequelize");
const permissions = require("./permissions");

const users = sequelize.define("user", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
    },
    permissoins_id: {
        references: {
            model: permissions,
            key: "id"
        }
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rule: {
        type: DataTypes.ENUM("admin", "member", "marketer"),
        defaultValue: "member"
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

users.sync({
    force: false
});

module.exports = users;