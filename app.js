const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const rutasVideojuegos = require('./routes/videojuegos.routes');
app.use('/videojuegos', rutasVideojuegos);

const rutasLabs = require('./routes/labs.routes');
app.use('/labs', rutasLabs);

// 404
app.use((request, response, next) => {
    response.status(404).send('CallbAck de error');
});

app.use((request, response, next) => {
    response.status(404).send('CallbAck de error');
});

app.listen(3000);