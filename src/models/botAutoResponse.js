import sequelize from "../database/connection";
import { DataTypes } from "sequelize";
import users from "./users";
import media from "./media";

const botAutoRes = sequelize.define("autoRes", {
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

export default botAutoRes;