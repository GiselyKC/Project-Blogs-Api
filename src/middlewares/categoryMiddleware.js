const validateName = (req, res, next) => {
  const { name } = req.body;

  if (name === undefined || name === '') {
    return res.status(400).json({ message: '"name" is required' });
  }
  next();
};

module.exports = validateName;
