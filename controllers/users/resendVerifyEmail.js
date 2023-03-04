const { User } = require("../../models/user");
const { NotFound, BadRequest } = require("http-errors");
const { sendMail } = require("../../middlewares");

const resendVerifyEmail = async (req, res, next) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      throw new NotFound(`User not found`);
    }
    if (user.verify) {
      throw new BadRequest(`Verification has already been passed`);
    }
    const mail = {
      to: email,
      subject: "Confirm your email",
      html: "<a href = 'http://localhost:3000/api/users/verify/:verificationToken'>Confirm your email</a>",
    };
    await sendMail(mail);
    res.json({
      message: "Verification email sent",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = resendVerifyEmail;
