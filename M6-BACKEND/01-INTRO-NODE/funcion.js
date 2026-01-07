const saludar = (nombre) => {
    console.log('Hola ' + nombre);
}

const darLasGracias = (nombre) => {
    console.log('Gracias ' + nombre + ', por tu visita');
}

module.exports = { saludar, darLasGracias }