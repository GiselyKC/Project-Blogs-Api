const { userPostService, userGetService } = require('../services/userService');
const generateToken = require('../helpers/generateToken');

const userPost = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  await userPostService(displayName, email, password, image);
  
  const token = generateToken(email);
  return res.status(201).json({ token });
};

const userGet = async (_req, res) => {
  const teste = await userGetService();
  return res.status(200).json(teste);
};

module.exports = {
  userPost,
  userGet,
};
