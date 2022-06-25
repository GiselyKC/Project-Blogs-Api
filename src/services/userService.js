const { User } = require('../database/models');

const error409 = { status: 409, message: 'User already registered' };
const error404 = { status: 404, message: 'User does not exist' };

const userPostService = async (displayName, email, password, image) => {
  const emailRegistered = await User.findOne({ where: { email } });
  // console.log(emailRegistered, 'emailRegistered');
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

const userGetByIdService = async (id) => {
  const usersId = await User.findOne({ where: { id } });
  if (usersId === null) {
    throw error404;
  }

  const users = await User.findOne({
    attributes: ['id', 'displayName', 'email', 'image'],
  });
  return users;
};

module.exports = {
  userPostService,
  userGetService,
  userGetByIdService,
};
