const { userPostService, userGetService, userGetByIdService } = require('../services/userService');
const generateToken = require('../helpers/generateToken');

const userPost = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  await userPostService(displayName, email, password, image);
  
  const token = generateToken(email);
  return res.status(201).json(token);
};

const userGet = async (_req, res) => {
  const user = await userGetService();
  return res.status(200).json(user);
};

const userGetById = async (req, res) => {
  const { id } = req.params;
  const userId = await userGetByIdService(id);

  return res.status(200).json(userId);
};

module.exports = {
  userPost,
  userGet,
  userGetById,
};
