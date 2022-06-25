const express = require('express');
const loginController = require('./controllers/loginController');
const { userPost, userGet, userGetById } = require('./controllers/userController');
const { categoryPost, categoryGet } = require('./controllers/categoriesController');
const validateLogin = require('./middlewares/loginMiddleware');
const {
  validateDisplayName,
  validateEmail,
  validatePassword,
} = require('./middlewares/userMiddleware');
const validateName = require('./middlewares/categoryMiddleware');
const authMiddleware = require('./middlewares/authMiddlewares');

const routers = express.Router();

routers.post('/login', validateLogin, loginController);
routers.post('/user', validateDisplayName, validateEmail, validatePassword, userPost);
routers.get('/user', authMiddleware, userGet);
routers.get('/user/:id', authMiddleware, userGetById);
routers.post('/categories', authMiddleware, validateName, categoryPost);
routers.get('/categories', authMiddleware, categoryGet);

module.exports = routers;
