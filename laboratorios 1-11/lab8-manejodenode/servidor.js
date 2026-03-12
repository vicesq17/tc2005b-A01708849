const http = require('http');
const fs = require('fs');

function promedio(arreglo) {
    let suma = 0;
    for (let num of arreglo) {
        suma += num;
    }
    return suma / arreglo.length;
}

console.log("Promedio:", promedio([5, 7, 10]));

function escribirArchivo(texto) {
    fs.writeFileSync("texto.txt", texto);
}

escribirArchivo("Este archivo fue creado desde una función en Node");

const server = http.createServer((request, response) => {

    if (request.url === "/") {

        fs.readFile("index.html", (error, data) => {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(data);
            response.end();
        });

    } else if (request.url === "/generar") {

        fs.writeFile("archivo.txt", "Se ha generado el archivo de texto aquí en VsCode", (error) => {
            if (error) {
                response.writeHead(500, { "Content-Type": "text/plain" });
                response.write("Error al generar el archivo");
                response.end();
            } else {
                response.writeHead(200, { "Content-Type": "text/plain" });
                response.write("Archivo exitoso, checa VsCode");
                response.end();
            }
        });

    } else {

        response.writeHead(404, { "Content-Type": "text/plain" });
        response.write("404 - Ruta no encontrada");
        response.end();

    }

});

server.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});