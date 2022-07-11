const express = require('express');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use('/api', routes);
app.use(errorHandler);

app.listen('8080', () => {
    console.log('Server Started on 8080');
});