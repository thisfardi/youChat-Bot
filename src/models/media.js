const sequelize = require("../database/connection");
const { DataTypes } = require("sequelize");
const users = require("./users");

const media = sequelize.define("media", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV1
    },
    user_id: {
        references: {
            model: users,
            key: "id"
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ext: {
        type: DataTypes.STRING,
        allowNull: false
    },
    path: {
        type: DataTypes.STRING,
        allowNull: false
    },
    public: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});

media.sync({
    force: false
});

module.exports =  media;