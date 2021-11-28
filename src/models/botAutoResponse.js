const sequelize = require("../database/connection");
const { DataTypes } = require("sequelize");
const users = require("./users");
const media = require("./media");

const botAutoRes = sequelize.define("autoResponse", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV1
    },
    creator: {
        references: {
            model: users,
            key: "id"
        }
    },
    media: {
        references: {
            model: media,
            key: "id"
        }
    },
    expect: {
        type: DataTypes.STRING,
        allowNull: false
    },
    response_with: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

botAutoRes.sync({
    force: false
});

module.exports =  botAutoRes;