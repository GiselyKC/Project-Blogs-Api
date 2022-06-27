const { BlogPost, Category, User } = require('../database/models');

const error404 = { status: 404, message: 'Post does not exist' };

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

const postGetByIdService = async (id) => {
  const postId = await BlogPost.findOne({ where: { id } });
  if (postId === null) {
    throw error404;
  }

  const post = await BlogPost.findOne({
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
  postGetByIdService,
};
