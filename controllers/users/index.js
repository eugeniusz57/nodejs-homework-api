const signup = require("./signup");
const login = require("./login");
const logout = require("./logout");
const getCurrentUser = require("./getCurrentUser");
const updateAvatar = require("./updateAvatar");
const verificationToken = require("./verificationToken");
const resendVerifyEmail = require('./resendVerifyEmail')

module.exports = {
  signup,
  login,
  logout,
  getCurrentUser,
  updateAvatar,
  verificationToken,
  resendVerifyEmail
};
