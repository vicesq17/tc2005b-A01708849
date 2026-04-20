const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const csrf = require('csurf');

const authRoutes = require('./routes/auth.routes');
const portalRoutes = require('./routes/portal.routes');

const app = express();
const csrfProtection = csrf();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'lab18_auth_secret_123456',
    resave: false,
    saveUninitialized: false
}));

app.use(csrfProtection);

app.use((req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
});

app.get('/', (req, res) => {
    res.redirect('/login');
});

app.use(authRoutes);
app.use(portalRoutes);

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});