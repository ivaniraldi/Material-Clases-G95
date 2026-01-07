const fs = require('fs') // REQUERIMOS EL MÓDULO DE FILE SYSTEM


const tareas = `1. Ir al gimnasio  ññññññ á é í ó ú ü
2. Buscar al niño al colegio
3. Pagar los gastos comunes`

const archivoJS = "const nombre = 'ivan'"

const tareasJSON = [
    {
        tarea: 'Ir al gimnasio',
        estado: 'pendiente'
    },
    {
        tarea: 'Buscar al niño al colegio',
        estado: 'completada'
    },
    {
        tarea: 'Pagar los gastos comunes',
        estado: 'completada'
    },
    {
        tarea: 'Preparar la comida',
        estado: 'completada'
    },
    {
        tarea: 'Estudiar para la prueba',
        estado: 'pendiente'
    }
]

fs.writeFileSync('tareas.txt', tareas)
fs.writeFileSync('archivo.js', archivoJS)
fs.writeFileSync('tareas.json', JSON.stringify(tareasJSON, null, tareasJSON.length)) // CONVERTIMOS EL OBJETO A FORMATO JSON

const leerTareas = fs.readFileSync('tareas.json', 'utf-8') // LEEMOS EL ARCHIVO CREADO CON LA CODIFICACIÓN UTF-8

const tareasParseadas = JSON.parse(leerTareas) // PARSEAMOS EL CONTENIDO LEÍDO

console.log(tareasParseadas) // MOSTRAMOS EN CONSOLA EL CONTENIDO PARSEADO

tareasParseadas.forEach(tarea => {
    console.log(`Tarea: ${tarea.tarea} - Estado: ${tarea.estado}`)
})