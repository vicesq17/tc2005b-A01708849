const http = require('http');
const fs = require('fs');
const server = http.createServer((request, response) => {

    if(request.url === "/generar"){
        fs.writeFileSync("hola.txt", "Archivo creado desde Node");

        response.write("Archivo creado correctamente");
        response.end();
    } else {

        response.write("Servidor funcionando");
        response.end();
    }

});

server.listen(3000);