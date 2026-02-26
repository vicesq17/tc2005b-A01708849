const express = require('express');
const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const rutasVideojuegos = require('./routes/videojuegos.routes');
app.use('/videojuegos', rutasVideojuegos);

app.use((request, response, next) => {
    response.status(404).send('No hay Videojuegos');
});

app.listen(3000);