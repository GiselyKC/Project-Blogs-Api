const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const config = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateJWT = (email) => {
  const payload = { email };

  const token = {
    token: jwt.sign(payload, JWT_SECRET, config),
  };

  return token;
};

module.exports = generateJWT;