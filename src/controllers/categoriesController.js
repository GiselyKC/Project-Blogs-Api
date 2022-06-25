const { categoryPostService, categoryGetService } = require('../services/categoriesService');

const categoryPost = async (req, res) => {
  const { name } = req.body;

  const newCategory = await categoryPostService(name);

  return res.status(201).json(newCategory);
};

const categoryGet = async (_req, res) => {
  const category = await categoryGetService();
  return res.status(200).json(category);
};

module.exports = {
  categoryPost,
  categoryGet,
};
