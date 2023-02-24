const { User } = require("../../models/user");
const { Conflict } = require("http-errors");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");

const singup = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      throw new Conflict(`Email in use`);
    }

    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    const avatarURL = gravatar.url(email);
    const result = await User.create({
      email,
      password: hashPassword,
      avatarURL,
    });
    const { subscription } = result;
    res.status(201).json({
      data: {
        user: { email, subscription, avatarURL },
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = singup;
