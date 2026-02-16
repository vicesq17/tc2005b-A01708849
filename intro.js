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
