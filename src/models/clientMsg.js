const sequelize = require("../database/connection");
const { DataTypes } = require("sequelize");

const clientMsg = sequelize.define("clinetMsg", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
    },
    wa_msgId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    conutry_code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    wa_userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

clientMsg.sync({
    force: false
});

module.exports = clientMsg;