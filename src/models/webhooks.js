import sequelize from "../database/connection";
import users from "./users";
import { DataTypes } from "sequelize";

var webhooks = sequelize.define("webhooks", {
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

export default webhooks;