const { postPostService, postGetService, postGetByIdService } = require('../services/postService');

const postPost = async (_req, res) => {
  await postPostService();

  return res.status(201).json();
};

const postGet = async (_req, res) => {
  const posts = await postGetService();

  return res.status(200).json(posts);
};

const postGetById = async (req, res) => {
  const { id } = req.params;
  
  const post = await postGetByIdService(id);

  return res.status(200).json(post);
};

module.exports = {
  postPost,
  postGet,
  postGetById,
};
