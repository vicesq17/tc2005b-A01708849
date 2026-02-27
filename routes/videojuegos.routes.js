const express = require('express');
const router = express.Router();

const path = require('path')

const html_header = `

`;

const html_footer = `

`;

const html_form = `

`;

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

//Middleware
router.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

router.get('/new', (request, response, next) => {
    response.send(html_header + html_form + html_footer);
});

router.post('/new', (request, response, next) => {
    videojuegos.push(request.body);
    response.redirect('/videojuegos');
});

router.get('/old', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'old_labs', 'index.html'));
});

router.use((request, response, next) => {
    console.log('Otro middleware!');
    let html_index = `
              <a href="/new"><button class="button is-primary">Nuevo videojuego</button></a>
              <div class="columns">`;

        for (let juego of videojuegos) {
            html_index += `
                <div class="column">
                    ${juego.nombre}
                    <figure class="image">
                        <img class="is-rounded" src="${juego.imagen}" />
                    </figure>
                </div>`;
        }
        
        html_index += `    
              </div>
            </div>
          </section>
          <section class="section">
            <div class="container">
              <div class="columns">
                <div class="column">
                  <h1 class="title">Comandos de git</h1>
                  <ul>
                    <li>git add: Sirve para agregar cambios a la transacción.</li>
                    <li>
                      git commit -m "mensaje en imperativo": Sirve para comprometer 
                      la transacción, es decir, guardar los cambios.
                    </li>
                    <li>git checkout <strong>[nombre_rama]</strong>: Sirve para cambiarse de rama.</li>
                    <li>
                      git checkout -b [nombre_rama]: Sirve para crear una nueva rama y 
                      cambiarse a esa nueva rama.
                    </li>
                    <li>
                      git push: Sirve para sincronizar los cambios desde mi repositorio 
                      hacia el repositorio remoto.
                    </li>
                    <li>
                      git pull: Sirve para sincronizar los cambios del repositorio remoto 
                      hacia mi repositorio.
                    </li>
                  </ul>
                </div>
              </div>  
          `;

    response.send(html_header + html_index + html_footer); //Manda la respuesta
});

module.exports = router;