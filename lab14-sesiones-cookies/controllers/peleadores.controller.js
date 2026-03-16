const Peleador = require('../models/peleador.model');

exports.get_new = (request, response, next) => {
    response.render('new');
};

exports.post_new = (request, response, next) => {
    const peleador = new Peleador(
        request.body.nombre,
        request.body.imagen,
        request.body.division
    );
    peleador.save();
    response.redirect('/peleadores');
};

exports.get_list = (request, response, next) => {
    const peleadores = Peleador.fetchAll();
    response.render('list', { peleadores: peleadores });
};