const express = require('express');
const loginController = require('./controllers/loginController');
const { userController } = require('./controllers/userController');
const validateLogin = require('./middlewares/loginMiddleware');
const {
  validateDisplayName,
  validateEmail,
  validatePassword,
} = require('./middlewares/userMiddleware');

const routers = express.Router();

routers.post('/login', validateLogin, loginController);
routers.post('/user', validateDisplayName, validateEmail, validatePassword, userController);

module.exports = routers;
