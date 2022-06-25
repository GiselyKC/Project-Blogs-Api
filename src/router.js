const express = require('express');
const loginController = require('./controllers/loginController');
const { userPost, userGet, userGetById } = require('./controllers/userController');
const validateLogin = require('./middlewares/loginMiddleware');
const {
  validateDisplayName,
  validateEmail,
  validatePassword,
} = require('./middlewares/userMiddleware');
const authMiddleware = require('./middlewares/authMiddlewares');

const routers = express.Router();

routers.post('/login', validateLogin, loginController);
routers.post('/user', validateDisplayName, validateEmail, validatePassword, userPost);
routers.get('/user', authMiddleware, userGet);
routers.get('/user/:id', authMiddleware, userGetById);

module.exports = routers;
