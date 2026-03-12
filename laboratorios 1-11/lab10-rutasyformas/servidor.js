const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {

    if (request.url === "/" && request.method === "GET") {

        fs.readFile("index.html", (error, data) => {
            if (error) {
                response.writeHead(500, {"Content-Type": "text/plain"});
                response.write("Error al leer index.html");
                response.end();
                return;
            }

            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(data);
            response.end();
        });

    }

});

server.listen(3000, () => {
    console.log("Servidor activo en http://localhost:3000");
});