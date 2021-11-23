import sequelize from "../database/connection";
import permissions from "./permissions";
import {
    DataTypes
} from "sequelize";

const users = sequelize.define("users", {
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

export default users;