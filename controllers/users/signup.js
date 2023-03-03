const { User } = require("../../models/user");
const { Conflict } = require("http-errors");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const  {v4}  = require("uuid");
const { sendMail } = require("../../middlewares");


const singup = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      throw new Conflict(`Email in use`);
    }

    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    const avatarURL = gravatar.url(email);
    const verificationToken = v4();
    const result = await User.create({
      email,
      password: hashPassword,
      avatarURL,
      verificationToken
    });
const mail = {
  to: email,
  subject:"Confirm your email",
  html: `<a href = 'http://localhost:3000/api/users/verify/:${verificationToken}'>Confirm your email</a>`
}
await sendMail(mail)
    const { subscription } = result;
    res.status(201).json({
      data: {
        user: { email, subscription, avatarURL,verificationToken },
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = singup;
