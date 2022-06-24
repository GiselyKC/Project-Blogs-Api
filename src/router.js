const express = require('express');
const loginController = require('./controllers/loginController');
// const userController = require('./controllers/userController');
const validateLogin = require('./middlewares/loginMiddleware');

const routers = express.Router();

routers.post('/login', validateLogin, loginController);

module.exports = routers;
