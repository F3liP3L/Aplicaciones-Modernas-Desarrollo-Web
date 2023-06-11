const fs = require("fs");

// Ruta del archivo JSON de configuración
const rutaArchivo = '\resources\constantes.json';

// Lee el contenido del archivo JSON
fs.readFile(rutaArchivo, 'utf8', (error, data) => {
  if (error) {
    throw error;
  }

  // Parsea el contenido JSON a un objeto JavaScript
  const configuraciones = JSON.parse(data);

  // Utiliza las configuraciones como desees
  console.log(configuraciones);
});