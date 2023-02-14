const express = require("express");

const router = express.Router();
const { validation, isValidId } = require("../../middlewares");
const { schema } = require("../../models/contact");
const { contacts: ctrlContacts } = require("../../controllers");

const validateMiddleware = validation(schema.addSchema);

router.get("/", ctrlContacts.listContacts);

router.get("/:contactId", isValidId, ctrlContacts.getById);

router.post("/", validateMiddleware, ctrlContacts.addContact);

router.delete("/:contactId", isValidId, ctrlContacts.removeContact);
router.patch(
  "/:contactId/favorite",
  isValidId,
  validation(schema.updateFavoriteSchema),
  ctrlContacts.updateStatusContact
);

router.put("/:contactId", isValidId, validateMiddleware, ctrlContacts.updateContact);

module.exports = router;
