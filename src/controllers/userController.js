const { userPostService } = require('../services/userService');
const generateToken = require('../helpers/generateToken');

const userController = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  await userPostService(displayName, email, password, image);
  
  const token = generateToken(email);
  return res.status(201).json({ token });
};

module.exports = {
  userController,
};
