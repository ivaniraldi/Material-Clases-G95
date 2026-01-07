const fs = require('fs');

let edad = 27;

const escribirNombre = (nombre) =>{ 
    fs.writeFileSync('nombre.txt', nombre)
}

const leerNombre = () =>{
    console.log(fs.readFileSync('nombre.txt', 'utf-8'));
}


module.exports = { escribirNombre, leerNombre, edad }