const { Category } = require('../database/models');

const categoryPostService = async (name) => {
  const category = await Category.create({ name });

  return category;
};

module.exports = {
  categoryPostService,
};
