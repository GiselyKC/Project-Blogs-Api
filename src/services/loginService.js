const { User } = require('../database/models');
const generateToken = require('../helpers/generateToken');

const error400 = { status: 400, message: 'Invalid fields' };

const loginService = async (email, password) => {
  const user = await User.findOne(({ where: { email } }));
  if (user === null || user.password !== password) {
    throw error400;
  }
  const token = generateToken(email);
  return token;
};

module.exports = loginService;
