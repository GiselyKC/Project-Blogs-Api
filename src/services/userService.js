const { User } = require('../database/models');

const error409 = { status: 409, message: 'User already registered' };

const userPostService = async (displayName, email, password, image) => {
  const emailRegistered = await User.findOne({ where: { email } });
  console.log(emailRegistered, 'emailRegistered');
  if (emailRegistered !== null) {
    throw error409;
  }

  const userCreatePost = await User.create({ displayName, email, password, image });
  return userCreatePost;
};

const userGetService = async () => {
  const users = await User.findAll({
    attributes: ['id', 'displayName', 'email', 'image'],
  });
  return users;
};

module.exports = {
  userPostService,
  userGetService,
};
