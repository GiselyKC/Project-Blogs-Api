const validatePost = (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (title === undefined || content === undefined || categoryIds === undefined) {
    return res
      .status(400)
      .json({ message: 'Some required fields are missing' });
  }
  next();
};

const validateCategoryIds = (req, res, next) => {
  const { categoryIds } = req.body;

  if (categoryIds === undefined || categoryIds === []) {
    return res
      .status(400)
      .json({ message: '"categoryIds" not found' });
  }
  next();
};

module.exports = {
  validatePost,
  validateCategoryIds,
};
