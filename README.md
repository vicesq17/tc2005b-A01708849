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


Lab 17 – Integración con Base de Datos (MySQL + MVC)

El Lab 17 extiende la arquitectura MVC implementada en los laboratorios anteriores, incorporando persistencia de datos mediante una base de datos MySQL utilizando el paquete mysql2.

Ubicación
lab14-sesiones-cookies

Estructura relevante
controllers/
models/
routes/
views/
util/database.js

Funcionamiento

Model
Se conecta a la base de datos mediante mysql2 y ejecuta consultas SQL utilizando prepared statements.

Se implementaron los siguientes métodos:
save() → inserta un nuevo peleador en la base de datos
fetchAll() → obtiene todos los peleadores
fetchOne(id) → obtiene un peleador por ID
update(id, nombre, imagen, division) → actualiza un peleador existente

Controller
Maneja la lógica de negocio y ahora trabaja con promesas provenientes de la base de datos.

Se encarga de:
Guardar nuevos peleadores
Obtener lista desde MySQL
Obtener detalle individual
Renderizar vistas dinámicas con datos reales

View
Se actualizan las vistas EJS para renderizar datos provenientes de la base de datos en lugar de datos estáticos.

Se agrega:
list.ejs → listado dinámico de peleadores
detail.ejs → vista individual de un peleador

Routes
Se agregan rutas dinámicas:

GET /peleadores → lista de peleadores
GET /peleadores/new → formulario
POST /peleadores/new → creación
GET /peleadores/:peleador_id → detalle individual

Base de Datos

Tabla utilizada:
peleadores

Estructura:
id (INT, PK, AUTO_INCREMENT)
nombre (VARCHAR)
imagen (VARCHAR)
division (VARCHAR)

Ejecutar el laboratorio

cd lab14-sesiones-cookies
npm install
npm start

Abrir en el navegador:

http://localhost:3000/peleadores

Comportamiento esperado

Los peleadores ahora se almacenan de forma persistente en la base de datos MySQL.

Al agregar un nuevo peleador:
Se guarda en la base de datos
Se refleja automáticamente en la vista

Se puede acceder a un detalle individual mediante la URL:
/peleadores/:id

Tecnologías utilizadas

Node.js
Express
EJS
MySQL
mysql2
express-session
HTML / CSS / JavaScript
TailwindCSS

Script de apoyo: script_lab17_peleadores.sql, el cual permite recrear la base de datos peleadores_db, la tabla peleadores y cargar datos iniciales de prueba.
Para el funcionamiento del laboratorio se actualizó el archivo util/database.js para conectar la aplicación con la base de datos peleadores_db.

Lab 18 – Autentificación

El Lab 18 se implementó como una nueva aplicación basada en la estructura MVC ya utilizada en laboratorios anteriores, reutilizando Express, EJS, sesiones y conexión a base de datos, pero adaptándolo al tema de un portal privado de acceso para usuarios.

Ubicación
lab18-auth

Estructura relevante
controllers/
models/
routes/
views/
util/
middleware/
public/
app.js

Funcionamiento

Autentificación
Se implementó el registro de usuarios, inicio de sesión y cierre de sesión.

Seguridad
Las contraseñas no se almacenan en texto plano. Se utiliza bcryptjs para aplicar hashing no reversible antes de guardarlas en la base de datos.

Sesiones
Se utiliza express-session para mantener el estado autenticado del usuario.

Rutas protegidas
Se implementó un middleware is-auth.js para proteger rutas privadas, permitiendo el acceso únicamente a usuarios autenticados.

Protección CSRF
Se integró csurf para proteger las peticiones POST. El token CSRF se genera desde el servidor y se envía a las vistas mediante variables locales.

Base de Datos
Se utiliza una base de datos MySQL llamada portal_ufc_db con una tabla usuarios.

Estructura principal de la tabla usuarios
id (INT, PK, AUTO_INCREMENT)
nombre (VARCHAR)
email (VARCHAR, UNIQUE)
password (VARCHAR)
archivo (VARCHAR, nullable)

Rutas principales
GET /login
GET /register
POST /login
POST /register
POST /logout
GET /portal

Ejecutar el laboratorio
cd lab18-auth
npm install
node app.js

Abrir en el navegador:

http://localhost:3000/login

Comportamiento esperado
El usuario puede registrarse, iniciar sesión y acceder a una ruta privada. Si no está autenticado, el middleware redirige al login. Las formas protegidas utilizan token CSRF.

Tecnologías utilizadas
Node.js
Express
EJS
MySQL
mysql2
express-session
bcryptjs
csurf
HTML / CSS / JavaScript
TailwindCSS

Lab 22 – Manejo de Archivos con Node.js + Express

El Lab 22 se integró dentro de la aplicación lab18-auth para extender el portal autenticado con funcionalidad de subida de archivos.

Ubicación
lab18-auth

Funcionamiento
Se agregó una vista protegida para subir archivos al servidor mediante un formulario con enctype="multipart/form-data".

Subida de archivos
Se utiliza multer para procesar archivos recibidos desde el cliente.

Configuración implementada
Se configuró un almacenamiento en disco mediante diskStorage.
Los archivos se guardan en el directorio uploads.
Se genera un nombre único concatenando timestamp y nombre original.
Se implementó un filtro para aceptar únicamente imágenes PNG, JPG y JPEG.

Directorio estático
Se expone el directorio uploads de forma estática para poder visualizar los archivos subidos desde el navegador.

Seguridad adicional
Dentro del directorio uploads se agregó un archivo index.html vacío para evitar el listado automático del directorio.

Persistencia
La ruta del archivo subido se guarda en la columna archivo de la tabla usuarios y también se refleja en la sesión activa.

Rutas relacionadas
GET /subir
POST /subir

Comportamiento esperado
El usuario autenticado puede subir una imagen desde el portal. El archivo se guarda físicamente en uploads y después puede visualizarse desde la vista privada del portal.

Tecnologías utilizadas
Node.js
Express
multer
MySQL
EJS
HTML / CSS / JavaScript

Lab 24 – AJAX

El Lab 24 se integró también dentro de la aplicación lab18-auth mediante un componente AJAX dentro del portal autenticado.

Ubicación
lab18-auth

Funcionamiento
Se añadió un componente asíncrono en la vista del portal que consulta al servidor el estado del archivo subido del usuario autenticado sin necesidad de recargar la página.

Implementación
Se registró el middleware bodyParser.json() para manejar peticiones JSON.
Se creó una ruta asíncrona que responde en formato JSON.
Se implementó un botón en la vista del portal que utiliza fetch para enviar una petición POST asíncrona al servidor.
La respuesta del servidor actualiza dinámicamente una sección del DOM.

Ruta AJAX implementada
POST /ajax/archivo-info

Respuesta JSON
El servidor devuelve el nombre del usuario, la ruta del archivo si existe y un mensaje indicando si ya tiene o no un archivo registrado.

Comportamiento esperado
Al hacer clic en el botón AJAX dentro del portal, la página no se recarga. En su lugar, se actualiza un bloque informativo con los datos recibidos desde el servidor.

Preguntas del laboratorio
¿Qué importancia tiene AJAX en el desarrollo de RIA's?
AJAX permite actualizar partes de la interfaz sin recargar toda la página, lo cual mejora la experiencia del usuario y hace que la aplicación se comporte de forma más dinámica e interactiva.

¿Qué implicaciones de seguridad tiene AJAX? ¿Dónde se deben hacer las validaciones?
AJAX implica riesgos como manipulación de peticiones, robo de tokens o envío de datos maliciosos. Las validaciones deben realizarse principalmente del lado del servidor, aunque en el cliente pueden existir validaciones complementarias.

¿Qué es JSON?
JSON es un formato ligero de intercambio de datos basado en texto y organizado en pares llave-valor. Es ampliamente utilizado para la comunicación entre cliente y servidor.

Tecnologías utilizadas
Node.js
Express
fetch API
JSON
EJS
JavaScript

Lab 26 – Servicios web

El Lab 26 se integró dentro de la aplicación lab18-auth mediante el consumo de un servicio web de terceros para mostrar contenido externo dentro del portal autenticado.

Ubicación
lab18-auth

Funcionamiento
Se consumió un servicio web externo desde el servidor y la respuesta se integró a una vista de la aplicación. La finalidad fue mostrar cómo una aplicación propia puede reutilizar funcionalidad o datos ofrecidos por terceros.

Integración
Se agregó una ruta dedicada para el consumo del servicio web y una vista específica para mostrar el resultado dentro del portal.

Ruta principal
GET /servicio-web

Comportamiento esperado
El usuario autenticado puede acceder a una vista donde se muestra información obtenida desde un servicio web externo, integrada a la aplicación mediante la arquitectura MVC.

Pregunta del laboratorio
¿Qué ventajas y desventajas tiene integrar aplicaciones web con servicios web de terceros?
Como ventajas, permiten ampliar funcionalidades sin desarrollarlas desde cero, ahorrar tiempo de implementación y reutilizar servicios ya disponibles. Como desventajas, generan dependencia externa, posibles cambios en disponibilidad, políticas de uso, autenticación, límites de consumo y consideraciones adicionales de seguridad.

Tecnologías utilizadas
Node.js
Express
EJS
Servicios web / APIs de terceros










# Autor

Victor Esquivel Fere  
TC2005B – Tecnológico de Monterrey
