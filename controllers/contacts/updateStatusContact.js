const { Contact } = require("../../models/contact");

const updateStatusContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(contactId, req.body, {
      new: true,
    });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = updateStatusContact;
