const validation = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      error.status = 400;
      error.message = "missing field favorite";
      next(error);
      return;
    }
    next();
  };
};

module.exports = validation;
