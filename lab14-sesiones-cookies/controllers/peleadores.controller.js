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

    if (!request.session.visitas) {
        request.session.visitas = 1;
    } else {
        request.session.visitas++;
    }

    const peleadores = Peleador.fetchAll();

    response.render('list', {
        peleadores: peleadores,
        visitas: request.session.visitas
    });
};