const Videojuego = require('../models/videojuego.model');

const path = require('path');

exports.get_new = (request, response, next) => {
    response.render('new');
};

exports.post_new = (request, response, next) => {
    const videojuego = new Videojuego(request.body.nombre, request.body.imagen);
    videojuego.save();
    response.setHeader('Set-Cookie', `ultimo_juego=${videojuego.nombre}; Secure`);
    response.redirect('/videojuegos');
};

exports.get_old = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'old_labs', 'index.html'));
};

exports.get_list = (request, response, next) => {
    console.log(request.get('Cookie'));
    response.render('list', {videojuegos: Videojuego.fetchAll()}); //Manda la respuesta
};