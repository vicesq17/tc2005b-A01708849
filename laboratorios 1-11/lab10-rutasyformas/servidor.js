const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    	console.log(`Ruta: ${request.url} | Método: ${request.method}`);

	// Caso 1: Página principal
	if (request.url === "/" && request.method === "GET") {

		fs.readFile("index.html", (error, data) => {

			if (error) {
				response.writeHead(500, {"Content-Type": "text/plain"});
				response.end("Error interno del servidor");
			}
			else {
				response.writeHead(200, {"Content-Type": "text/html"});
				response.end(data);
			}

		});
	}

	// Caso 2: Ruta adicional
	else if (request.url === "/info" && request.method === "GET") {

		response.writeHead(200, {"Content-Type": "text/html"});
		response.end("<h1>Ruta adicional del servidor</h1>");

	}

	// Caso 3: Recepción del formulario
	else if (request.url === "/enviar" && request.method === "POST") {

		let body = '';

		request.on('data', chunk => {
			body += chunk.toString();
		});

		request.on('end', () => {

			const nombre = body.split("=")[1];

			fs.appendFile("datos.txt", nombre + "\n", (error) => {
				if (error) {
					console.log("Error de gusardado");
				}
			});

			response.writeHead(200, {"Content-Type": "text/html"});
			response.end(`<h1>Hola ${nombre}, datos recibidos</h1>`);

		});
	}

	// Caso 4: Ruta inexistente
	else {

		response.writeHead(404, {"Content-Type": "text/plain"});
		response.end("404 - Ruta no encontrada");

	}

});

server.listen(3000, () => {
	console.log("Servidor activo en http://localhost:3000");
});