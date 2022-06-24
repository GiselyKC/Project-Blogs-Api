const loginService = require('../services/loginService');

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const token = await loginService(email, password);

  return res.status(200).json({ token });
};

module.exports = loginController;
