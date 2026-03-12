const http = require('http');
const fs = require('fs');

function promedio(arreglo) {
    let suma = 0;
    for (let num of arreglo) {
        suma += num;
    }
    return suma / arreglo.length;
}

console.log("Adentri del servidor de Node");
console.log("Promedio:", promedio([5, 7, 10]));

function escribirArchivo(texto) {
    fs.writeFileSync("texto.txt", texto);
}

escribirArchivo("Archivo creado nuevamente");

// Runge Kutta Para resolver ecuaciones diferenciales
function rungeKutta(x0, y0, h) {
    function f(x, y) {
        return x + y;
    }

    let k1 = h * f(x0, y0);
    let k2 = h * f(x0 + h / 2, y0 + k1 / 2);

    let y1 = y0 + k2;
    return y1;
}

console.log("Resultado Runge Kutta:", rungeKutta(0, 1, 0.1));

const server = http.createServer((request, response) => {

    if (request.url === "/") {

        fs.readFile("index.html", (error, data) => {
            if (error) {
                response.writeHead(500, { "Content-Type": "text/plain" });
                response.write("Error al leer index.html");
                response.end();
                return;
            }

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

    } else if (request.url === "/rk") {

        const resultado = rungeKutta(0, 1, 0.1);

        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(`<h1>Felicidades, costo hacerlo pero el Resultado Runge Kutta: ${resultado}</h1>`);
        response.end();

    } else {

        response.writeHead(404, { "Content-Type": "text/plain" });
        response.write("404");
        response.end();

    }

});

server.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});