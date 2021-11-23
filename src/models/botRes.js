import sequelize from "../database/connection";
import { DataTypes } from "sequelize";
import clientMsg from "./clientMsg";
import media from "./media";
import users from "./users";

const botResponse = sequelize.define("bot_res", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV1
    },
    replied_to: {
        references: {
            model: clientMsg,
            key: "id"
        },
        allowNull: true
    },
    media_id: {
        references: {
            model: media,
            key: "id"
        },
        allowNull: true
    },
    user_id: {
        references: {
            model: users,
            key: "id"
        },
        allowNull: true
    },
    body: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

botResponse.sync({
    force: false
});

export default botResponse;