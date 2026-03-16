const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

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
    response.status(404).send('CallbAck de error 2.0 de mi ruta de labs');
});

app.listen(3000);