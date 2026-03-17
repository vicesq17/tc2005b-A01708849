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

    peleador.save()
    .then(() => {
        response.redirect('/peleadores');
    })
    .catch(err => console.log(err));

};

exports.get_list = (request, response, next) => {

    if (!request.session.visitas) {
        request.session.visitas = 1;
    } else {
        request.session.visitas++;
    }

    response.setHeader(
        'Set-Cookie',
        'ultima_visita=' + new Date().toISOString() + '; HttpOnly'
    );

    const cookies = request.get('Cookie');
    console.log('Cookies del navegador:', cookies);

    Peleador.fetchAll()
    .then(([rows, fieldData]) => {

        response.render('list', {
            peleadores: rows,
            visitas: request.session.visitas
        });

    })
    .catch(err => console.log(err));

};

exports.get_one = (request, response, next) => {

    const id = request.params.peleador_id;

    Peleador.fetchOne(id)
    .then(([rows, fieldData]) => {

        response.render('detail', {
            peleador: rows[0]
        });

    })
    .catch(err => console.log(err));

};