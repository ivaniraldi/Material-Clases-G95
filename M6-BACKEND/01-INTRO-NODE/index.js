const { escribirNombre, leerNombre, edad } = require('./funciones-fs.js');

const { saludar, darLasGracias } = require('./funcion.js');

console.log('La edad es: ' + edad);

escribirNombre('Iván Iraldi');

leerNombre();

saludar('Iván');

darLasGracias('Iván');

saludar('María');

darLasGracias('María');
