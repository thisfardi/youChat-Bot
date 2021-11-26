const twilio = require("twilio");
const twilioConfig = require("../config/config");

const {
    accountSid, authToken
} = twilioConfig;

const Twilio = twilio(accountSid, authToken);

