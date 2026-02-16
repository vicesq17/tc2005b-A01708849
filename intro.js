console.log("Hola Mundo")
console.info("Esto es un mensaje informativo")
console.warn("Esto es un mensaje de advertencia")
console.error("Esto es un mensaje de error")


//alcance de la variable
{
    var Minecraft = "5 estrellas;"
    let halo = "4 estrellas;"
}

//la variable minecraft sigue estando afuera del ambito que fue declarada
console.log(Minecraft);

//Se mabda un error porque la variable halo murio al salir del bloque de codigo donde fue declarada
console.log(halo);



alert("Hola Mundo")

const favorito = prompt("¿Cuál es tu videojuego favorito?")

console.log("Tu videojuego favorito es: " + favorito)




//Variable, confirm guarda True o False
const ganas_jugar = confirm("¿Tienes ganas de jugar?")

if (ganas_jugar) {
    console.log("¡Genial! Vamos a jugar.")
} else {
    console.log("¡A comer")
}

//funciones tradicionales
function is_precio() {
    return is_precio;
}

console.log(is_precio());

//funciones modernas
() => { }


//discerta
const vidas = () => {
    console.log("Te quedan 3 visas")
}

vidas();


//arreglos
const videojuegos = ["Minecraft"];

const jugadores = new Array();

videojuegos.push("Doom");
videojuegos[10] = "Zelda";


//arreglos asociativos
videojuegos["Nintendo"] = "Mario Bros"

for (let i = 0; i < videojuegos.length; i++) {
    console.log(videojuegos[i]);
}

//recorridos alternativos
for (let juego in videojuegos) {
    console.log(juego);
}

//objetos
const objeto = {};

const videojuego = {
    nombre: "Minecraft",
    genero: "Sandbox",
    plataformas: ["PC", "Consolas", "Móviles"],
}

