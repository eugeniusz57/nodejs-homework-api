const express = require("express");

const router = express.Router();
const { validation, auth, upload } = require("../../middlewares");
const { users: ctrlUsers } = require("../../controllers");
const { JoiSchema, verifyEmailSchema } = require("../../models/user");

router.post("/signup", validation(JoiSchema), ctrlUsers.signup);
router.post("/login", validation(JoiSchema), ctrlUsers.login);
router.get("/current", auth, ctrlUsers.getCurrentUser);
router.get("/logout", auth, ctrlUsers.logout);
router.patch("/avatars", auth, upload.single("avatar"), ctrlUsers.updateAvatar);

router.get("/verify/:verificationToken",  ctrlUsers.verificationToken);
router.post("/verify", validation(verifyEmailSchema),  ctrlUsers.resendVerifyEmail);
module.exports = router;
