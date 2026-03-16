# TC2005B – Construcción de Software

Repositorio de prácticas y laboratorios del curso **TC2005B**.

El proyecto contiene varios laboratorios desarrollados durante el semestre.  
Algunos se ejecutan directamente desde **HTML**, mientras que otros utilizan **Node.js + Express** para implementar funcionalidad de backend.

---

# Laboratorios 1 – 8

Los primeros laboratorios corresponden a ejercicios básicos de **HTML, CSS y JavaScript**.

Para visualizarlos:

Ir a la carpeta:

laboratorios 1-11

Abrir el archivo:

index.html

Desde ese archivo se puede navegar a los laboratorios correspondientes.

Estos laboratorios funcionan directamente en el navegador.

---

# Lab 11 – Express

El **Lab 11** corresponde a la primera implementación de un servidor utilizando **Node.js + Express**.

## Ubicación del laboratorio

laboratorios 1-11/lab10-rutasyformularios

## Archivos principales

servidor.js  
index.html  
datos.txt

## Funcionamiento

El servidor se ejecuta utilizando **Express** y define varias rutas HTTP.

Una de las rutas contiene un formulario que envía información al servidor mediante **POST**.  
El servidor recibe los datos enviados por el formulario y los guarda en el archivo **datos.txt** dentro del mismo proyecto.

## Ejecutar el laboratorio

cd laboratorios 1-11/lab10-rutasyformularios  
node servidor.js

Después abrir en el navegador:

http://localhost:3000

---

# Lab 12 – Node.js + Express + EJS

El **Lab 12** introduce el uso de **Node.js**, **Express** y el motor de plantillas **EJS** para generar HTML dinámico.

Este laboratorio se encuentra integrado dentro de la **aplicación principal del repositorio**, cuyo punto de entrada es:

app.js

## Ejecutar el laboratorio

npm install  
node app.js

Después abrir en el navegador:

http://localhost:3000

---

# Lab 13 – Arquitectura MVC

El **Lab 13** implementa una aplicación utilizando el patrón arquitectónico **MVC (Modelo-Vista-Controlador)**.

## Ubicación

lab13-mvc

## Estructura principal

controllers/  
models/  
routes/  
views/  
public/  
app.js

## Funcionamiento

**Model**  
Maneja los datos de los peleadores.

**View**  
Renderiza la interfaz utilizando **EJS**.

**Controller**  
Gestiona las peticiones HTTP y conecta modelo y vista.

**Routes**  
Define las rutas disponibles en la aplicación.

## Ejecutar el laboratorio

cd lab13-mvc  
npm install  
npm start

Abrir en el navegador:

http://localhost:3000

## Funcionalidad

Visualizar una lista de peleadores UFC  
Agregar nuevos peleadores mediante un formulario

---

# Lab 14 – Manejo de Sesiones y Cookies

El **Lab 14** extiende el laboratorio anterior agregando manejo de **sesiones y cookies** utilizando **express-session**.

## Ubicación

lab14-sesiones-cookies

## Funcionalidad añadida

Uso de **express-session**  
Contador de visitas almacenado en sesión  
Creación de cookies mediante el header **Set-Cookie**  
Lectura de cookies desde el **request**

## Ejecutar el laboratorio

cd lab14-sesiones-cookies  
npm install  
npm start

Abrir en el navegador:

http://localhost:3000

## Comportamiento esperado

Cada vez que se recarga la página se incrementa el **contador de visitas almacenado en la sesión**.

El servidor envía una cookie llamada:

ultima_visita

Las cookies se pueden observar desde las **herramientas de desarrollador del navegador**.

---

# Tecnologías utilizadas

Node.js  
Express  
EJS  
express-session  
HTML / CSS / JavaScript  
TailwindCSS

---

# Autor

Victor Esquivel Fere  
TC2005B – Tecnológico de Monterrey
