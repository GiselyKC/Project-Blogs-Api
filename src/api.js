const express = require('express');
require('express-async-errors');
const middlewareErrors = require('./middlewares/error');

// ...

const app = express();
const router = require('./router');

app.use(express.json());
app.use('/', router);
app.use(middlewareErrors);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
