console.log("Prueba de servidor lab 8");

function promedio_de_nums(arreglo) {
    if (arreglo.length === 0) {
        return 0; 
    }   
    
    
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma / arreglo.length;
}

//primera iteración
const numeros = [10, 20, 30, 40];

console.log("Promedio:", promedio_de_nums(numeros));




// segunda iteración--->referencia de Node.js v25.6.1 documentation


const fs = require('fs');

function leer_numeros_desde_archivo(nombre_archivo) {
    fs.readFile(nombre_archivo, 'utf8', (err, data) => {
        if (err) {
            console.error("ERROR de archivo:", err);
            return;
        }
        const numeros = data.split(',').map(Number);
        console.log("Promedio desde archivo:", promedio_de_nums(numeros));
            
    });
}
leer_numeros_desde_archivo("numeros.txt");