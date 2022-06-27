const { BlogPost, Category, User } = require('../database/models');

const postPostService = async () => {

};

const postGetService = async () => {
  const post = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
  return post;
};

module.exports = {
  postPostService,
  postGetService,
};
