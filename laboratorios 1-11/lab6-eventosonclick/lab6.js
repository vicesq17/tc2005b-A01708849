//  VALIDADOR DE PASSWORD 

document.getElementById("btnValidar").addEventListener("click", validar);

function validar(){

let pass = document.getElementById("pass").value;
let confirm = document.getElementById("confirm").value;
let mensaje = document.getElementById("mensaje");

if(pass === "" || confirm === ""){
mensaje.textContent = "Debes llenar ambos campos";
mensaje.style.color = "purple";
return;
}

if(pass === confirm){
mensaje.textContent = "Passwords coinciden";
mensaje.style.color = "turquoise";
}else{
mensaje.textContent = "Passwords no coinciden";
mensaje.style.color = "blue";
}

}


//  AYUDA DINÁMICA 

document.getElementById("pass").addEventListener("focus", function(){

let mensaje = document.getElementById("mensaje");

mensaje.textContent = "Escribe una contraseña ";
mensaje.style.color = "gray";

});


//  GEOLOCALIZACIÓN 

document.getElementById("btnGeo").addEventListener("click", getLocation);

function getLocation(){

const x = document.getElementById("demo");

if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(success, error);

}else{

x.textContent = "Geolocation no soportada por el navegador";

}

}


function success(position){

document.getElementById("demo").innerHTML =
"Latitud: " + position.coords.latitude +
"<br>Longitud: " + position.coords.longitude;

}


function error(){

alert("Intenta despues");

}


//  EVENTO EXTRA

setTimeout(function(){

console.log("Lab 6 cargado correctamente");
let mensaje = document.getElementById("mensaje");
mensaje.textContent = "Bienvenido al laboratorio 6";
mensaje.style.color = "orange";

},4500);