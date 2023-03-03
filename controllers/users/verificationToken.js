const { User } = require("../../models/user");
const {NotFound} = require('http-errors')

const verificationToken = async (req, res, next) => {
   try {
    const {verificationToken} = req.params;
    const user = User.findOne({verificationToken})
    if(!user){
        throw new NotFound(`User not found`);
    }
await User.findByIdAndUpdate(user._id, {verify: true, verificationToken: ''});
res.json({
    message: 'Verification successful',
})

   } catch (error) {
    next(error);
   }

};

module.exports = verificationToken;
