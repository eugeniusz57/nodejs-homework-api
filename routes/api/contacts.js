const express = require("express");

const router = express.Router();
const { validation } = require("../../middlewares");
const { contactsSchema } = require("../../schemas");
const { contacts: ctrl } = require("../../controllers");

const validateMiddleware = validation(contactsSchema);

router.get("/", ctrl.listContacts);

router.get("/:contactId", ctrl.getById);

router.post("/", validateMiddleware, ctrl.addContact);

router.delete("/:contactId", ctrl.removeContact);

router.put("/:contactId", validateMiddleware, ctrl.updateContact);

module.exports = router;
