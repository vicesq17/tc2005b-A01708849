const bcrypt = require('bcryptjs');
const User = require('../models/user.model');

exports.getLogin = (req, res) => {
    res.render('login');
};

exports.getRegister = (req, res) => {
    res.render('register');
};

exports.postRegister = (req, res) => {
    const { nombre, email, password } = req.body;

    User.findByEmail(email)
    .then(([rows]) => {
        if (rows.length > 0) {
            return res.redirect('/register');
        }

        return bcrypt.hash(password, 12)
        .then(hashedPassword => {
            const user = new User(nombre, email, hashedPassword);
            return user.save().then(() => res.redirect('/login'));
        });
    })
    .catch(err => console.log(err));
};

exports.postLogin = (req, res) => {
    const { email, password } = req.body;
    let loadedUser;

    User.findByEmail(email)
    .then(([rows]) => {
        if (rows.length === 0) {
            return res.redirect('/login');
        }

        loadedUser = rows[0];
        return bcrypt.compare(password, loadedUser.password);
    })
    .then(doMatch => {
        if (!doMatch) {
            return res.redirect('/login');
        }

        req.session.isLoggedIn = true;
        req.session.user = loadedUser;

        req.session.save(err => {
            res.redirect('/portal');
        });
    })
    .catch(err => console.log(err));
};

exports.postLogout = (req, res) => {
    req.session.destroy(err => {
        res.redirect('/login');
    });
};

exports.getPortal = (req, res) => {
    res.render('portal', {
        nombre: req.session.user.nombre,
        archivo: req.session.user.archivo
    });
};

exports.getSubir = (req, res) => {
    res.render('subir');
};

exports.postSubir = (req, res) => {
    const archivo = req.file;

    if (!archivo) {
        return res.redirect('/subir');
    }

    const rutaArchivo = archivo.path.replace(/\\/g, '/');

    User.updateArchivo(req.session.user.id, rutaArchivo)
    .then(() => {
        req.session.user.archivo = rutaArchivo;
        res.redirect('/portal');
    })
    .catch(err => console.log(err));
};

exports.postArchivoInfoAjax = (req, res) => {
    return res.status(200).json({
        nombre: req.session.user.nombre,
        archivo: req.session.user.archivo || null,
        mensaje: req.session.user.archivo
            ? 'El usuario ya tiene un archivo subido.'
            : 'El usuario todavía no ha subido ningún archivo.'
    });
};

exports.getServicioWeb = async (req, res) => {
    try {
        const videoUrl = 'https://vimeo.com/76979871';
        const apiUrl = `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(videoUrl)}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        res.render('servicio-web', {
            nombre: req.session.user.nombre,
            video: data
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al consumir el servicio web');
    }
};