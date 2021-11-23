import twilio from 'twilio';
import { twilio as twilioConfig } from "../config/config";
const {
    accountSid, authToken
} = twilioConfig;

const Twilio = twilio(accountSid, authToken);

