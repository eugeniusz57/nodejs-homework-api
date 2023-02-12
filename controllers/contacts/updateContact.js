const contactsOperations = require("../../models/contacts");

const updateContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contactsOperations.updateById(contactId, req.body);
    res.status(200).json({
      status: `success`,
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateContact;
