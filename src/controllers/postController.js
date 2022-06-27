const { postPostService, postGetService } = require('../services/postService');

const postPost = async (_req, res) => {
  await postPostService();

  return res.status(201).json();
};

const postGet = async (_req, res) => {
  const posts = await postGetService();

  return res.status(200).json(posts);
};

module.exports = {
  postPost,
  postGet,
};
