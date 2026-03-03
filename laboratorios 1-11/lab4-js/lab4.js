console.log("JS conectado");
console.log("Hola Mundo");


let numero = prompt("DAME UN NUM");
numero = Number(numero);

if (isNaN(numero) || numero < 1) {
    alert("Numero que sea mas grande que a 0");
} else {
document.write("<h2>Tabla de operaciones</h2>");
document.write("<table border='1'>");
document.write("<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");
for (let i = 1; i <= numero; i++) {
    let cuadrado = i * i;
    let cubo = i * i * i;
    document.write("<tr><td>" + i + "</td><td>" + cuadrado + "</td><td>" + cubo + "</td></tr>");   
   
}
 document.write("</table>"); }

 /*
Ejercicio 2
*/


let a = Math.floor(Math.random() * 10);
let b = Math.floor(Math.random() * 10);

let inicio = Date.now();

let respuesta = prompt("Piensa rápido " + a + " + " + b + "?");
respuesta = Number(respuesta);

let fin = Date.now();
let tiempo = (fin - inicio) / 1000;

if (respuesta === a + b) {
    document.write("<p>Bien. Tiempo: " + tiempo + " segundos</p>");
} else {
    document.write("<p>Mal. Tiempo: " + tiempo + " segundos</p>");
}

 /*
Ejercicio 3
*/

function contador(array) {
    let negativos = 0;
    let ceros = 0;
    let positivos = 0;  


    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negativos++;
        } else if (array[i] === 0) {
            ceros++;
        } else {
            positivos++;
        }
    }
    return {negativos, ceros, positivos};
    }

//TEST 3



let numeros = [1, -2, 0, 5, -3, 0, 4];

let resultado = contador(numeros);

console.assert(resultado.negativos === 2, "NEG");
console.assert(resultado.ceros === 2, "CER");
console.assert(resultado.positivos === 3, "POS");

document.write("<h3>Ejercicio 3</h3>");
document.write("<p>Negativos: " + resultado.negativos + "</p>");
document.write("<p>Ceros: " + resultado.ceros + "</p>");
document.write("<p>Positivos: " + resultado.positivos + "</p>");

// TEST 4
// EJ4

function promedios(matriz) {
    let res = [];

    for (let i = 0; i < matriz.length; i++) {
        let fila = matriz[i];
        let suma = 0;

        for (let j = 0; j < fila.length; j++) {
            suma += fila[j];
        }

        res.push(suma / fila.length);
    }

    return res;
}

// TEST 4
let m = [
    [10, 0, 10],
    [5, 5, 5, 5],
    [2, 4]
];

let p = promedios(m);

console.assert(p[0] === 20 / 3, "ERR F1");
console.assert(p[1] === 5, "ERR F2");
console.assert(p[2] === 3, "ERR F3");

document.write("<h3>EJ4</h3>");
document.write("<p>Promedios: " + p.join(", ") + "</p>");

// EJ5

function inverso(num) {
    let n = Math.abs(num);
    let inv = 0;

    while (n > 0) {
        let dig = n % 10;
        inv = inv * 10 + dig;
        n = Math.floor(n / 10);
    }

    if (num < 0) {
        inv = -inv;
    }

    return inv;
}

// TEST 5
let r = inverso(12340);

console.assert(r === 4321, "ERR INV");

document.write("<h3>EJ5</h3>");
document.write("<p>Inverso: " + r + "</p>");

// EJ6

function RutinaGym(nombre) {
    this.nombre = nombre;
    this.series = 0;
    this.reps = 0;

    this.agregarEntrenamiento = function (series, reps) {
        this.series += series;
        this.reps += reps;
    };

    this.calcularVolumen = function () {
        return this.series * this.reps;
    };
}

// TEST 6
let rutina = new RutinaGym("Victor");

rutina.agregarEntrenamiento(5, 10);

let volumen = rutina.calcularVolumen();

console.assert(volumen === 50, "ERR VOLUMEN");

document.write("<h3>EJ6</h3>");
document.write("<p>Atleta: " + rutina.nombre + "</p>");
document.write("<p>Series: " + rutina.series + "</p>");
document.write("<p>Reps: " + rutina.reps + "</p>");
document.write("<p>Volumen total: " + volumen + "</p>");
document.write("Prueba de estabilidad realizada con éxito");

