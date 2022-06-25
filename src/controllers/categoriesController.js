const { categoryPostService } = require('../services/categoriesService');

const categoryPost = async (req, res) => {
  const { name } = req.body;

  const category = await categoryPostService(name);

  return res.status(201).json(category);
};

module.exports = {
  categoryPost,
};
