const twilio = require("twilio");
const twilioConfig = require("../config/config");

const {
    accountSid,
    authToken
} = twilioConfig;

const Twilio = twilio(accountSid, authToken);



module.exports = {
    getBalance: () => {
        return new Promise((resolve, reject) => {
            Twilio.balance.fetch().then((data) => {
                const balance = Math.round(data.balance * 100) / 100;
                const currency = data.currency;
                let twilioBalance = {
                    balance,
                    currency
                };
                resolve(twilioBalance);
            }).catch((err) => {
                reject(err);
            });
        });

    }
}