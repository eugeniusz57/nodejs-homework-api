const validation = require("./validation");
const isValidId = require("./isValidId");
const auth = require("./auth");
const upload = require("./upload");
const sendMail = require("./sendMail");

module.exports = {
  validation,
  isValidId,
  auth,
  upload,
  sendMail,
};
