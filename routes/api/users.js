const express = require("express");

const router = express.Router();
const { validation, auth } = require("../../middlewares");
const { users: ctrlUsers } = require("../../controllers");
const { JoiSchema } = require("../../models/user");

router.post("/signup", validation(JoiSchema), ctrlUsers.signup);
router.post("/login", validation(JoiSchema), ctrlUsers.login);
router.get("/current", auth, ctrlUsers.getCurrentUser);
router.get("/logout", auth, ctrlUsers.logout);

module.exports = router;
