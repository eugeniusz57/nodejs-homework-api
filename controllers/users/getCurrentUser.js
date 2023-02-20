const getCurrentUser = async (req, res, next) => {
  const { email } = req.user;
  res.json({
    data: {
      user: { email },
    },
  });
};

module.exports = getCurrentUser;
