const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const csrf = require('csurf');
const multer = require('multer');

const authRoutes = require('./routes/auth.routes');
const portalRoutes = require('./routes/portal.routes');

const app = express();
const csrfProtection = csrf();

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('archivo'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

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