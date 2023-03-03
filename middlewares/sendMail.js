const sgMail = require('@sendgrid/mail')
require('dotenv').config();

const {SENDGRID_EMAIL_KEY} = process.env;
sgMail.setApiKey(SENDGRID_EMAIL_KEY);

const userMail = async(data) => {
    try {
        const email = {...data, from: "evgeniykavetskiy@gmail.com"}
        await sgMail.send(email)
        return true;
    } catch (error) {
        throw error;
    }
}

module.exports = userMail;