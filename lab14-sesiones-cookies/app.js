const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const session = require('express-session');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(session({
    secret: 'lab14_secreto_super_largo_123456',
    resave: false,
    saveUninitialized: false
}));

const rutasPeleadores = require('./routes/peleadores.routes');

app.get('/', (req, res) => {
    res.redirect('/peleadores');
});

app.use('/peleadores', rutasPeleadores);

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});