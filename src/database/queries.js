/**
 * @author Monzer Omer
 * @description an object contain all the queries you gonna need in this bot
 * 
 * if you think it could be better than this you can change it and open a pull request or just tell me and I'll change it
 * monzersmiledev@outlook.com
 */
import { usersModel } from "../models/index";

export default class Queries {


    getAllUsers(callback) {

        usersModel.findAll().then((result) => {
            callback(null, result);
    
        }).catch((err) => {
            callback(new Error(err));
    
        });
    
    }
}