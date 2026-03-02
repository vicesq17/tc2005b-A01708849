const videojuegos = [
  {
    nombre: "Minecraft",
    imagen: "https://store-images.s-microsoft.com/image/apps.58378.13850085746326678.826cc014-d610-46af-bdb3-c5c96be4d22c.64287a91-c69e-4723-bb61-03fecd348c2a?q=90&w=480&h=270"
  },
  {
    nombre: "Gears of war",
    imagen: "https://upload.wikimedia.org/wikipedia/en/thumb/8/82/Gears_of_war_cover_art.jpg/250px-Gears_of_war_cover_art.jpg"
  },
];

const path = require('path');

exports.get_new = (request, response, next) => {
    response.render('new');
};

exports.post_new = (request, response, next) => {
    videojuegos.push(request.body);
    response.redirect('/videojuegos');
};

exports.get_old = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'old_labs', 'index.html'));
};

exports.get_list = (request, response, next) => {
    response.render('list', {videojuegos: videojuegos}); //Manda la respuesta
};