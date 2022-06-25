const { Category } = require('../database/models');

const categoryPostService = async (name) => {
  const category = await Category.create({ name });

  return category;
};

const categoryGetService = async () => {
  const category = await Category.findAll({
    attributes: ['id', 'name'],
  });
  return category;
};

module.exports = {
  categoryPostService,
  categoryGetService,
};
