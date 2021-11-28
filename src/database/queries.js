const {
    usersModel,
    permissionsModel
} = require("../models/index");

/**
 * @author Monzer Omer
 * @description an object contain all the queries you gonna need in this bot
 * 
 * if you think it could be better than this you can change it and open a pull request or just tell me and I'll change it
 * monzersmiledev@outlook.com
 */

module.exports = {

    getAllusers: () => {
        return new Promise((resolve, reject) => {
            usersModel.findAll().then((result) => {
                resolve(result);

            }).catch((err) => {
                reject(err);

            });
        });


    },
    findUsername: (username) => {

        return new Promise((resolve, reject) => {
            usersModel.findOne({
                attributes: ["username"],
                where: {
                    username: username
                }
            }).then((result) => {
                if (result === username) {
                    resolve(true);
                } else {
                    resolve(false);
                }

            }).catch((err) => {
                reject(err);

            });
        });
    },

    createUser: (data) => {

        usersModel.create(data).then((logs) => {
            let {
                id
            } = logs;

        }).catch((err) => {
            ;
        });
    }
}