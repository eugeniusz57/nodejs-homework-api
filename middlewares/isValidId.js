const { isValidObjectId } = require("mongoose");

const createError = require("http-errors");

const isValidId = (req, res, next) => {
  const { contactId } = req.params;
  const isCorrectId = isValidObjectId(contactId);
  if (!isCorrectId) {
    const error = createError(400, `${contactId} is not corect id format`);
    next(error);
  }
  next();
};

module.exports = isValidId;
