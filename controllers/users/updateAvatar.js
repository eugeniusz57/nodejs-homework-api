const fs = require("fs/promises");
const path = require("path");
const { User } = require("../../models/user");
const Jimp = require("jimp");

const avatarDir = path.join(__dirname, "../", "../", "public", "avatars");

const updateAvatar = async (req, res, next) => {
  try {
    const { path: tempUpload, filename } = req.file;
    console.log("filename==", filename);

    Jimp.read(`${filename}`)
      .then((avatar) => {
        return avatar
          .resize(250, 250) // resize
          .write(`${filename}`); // save
      })
      .catch((err) => {
        console.error(err);
      });

    const { _id } = req.user;
    const [extention] = filename.split(".").reverse();

    const avatarName = `${_id}.${extention}`;

    console.log("avatarName ==", avatarName);

    const resultUpload = path.join(avatarDir, avatarName);
    await fs.rename(tempUpload, resultUpload);
    const avatarURL = path.join("avatars", avatarName);
    console.log(avatarURL);
    //  const avatarURL = Jimp.read(path.join("avatars", avatarName)).resize(
    //    250,
    //    250
    //  );
    await User.findByIdAndUpdate(_id, { avatarURL });
    res.json({
      avatarURL,
    });
    next();
  } catch (error) {
    await fs.unlink(req.file.path);

    next(error);
  }
};

module.exports = updateAvatar;
