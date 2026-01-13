const express = require("express"); // Importar el módulo de Express
const path = require("path"); // Importar el módulo path
const fs = require("fs"); // Importar el módulo file system 
const cors = require("cors"); // Importar el módulo CORS

const app = express(); // Crear una instancia de Express

app.use(express.json()); // Middleware para parsear JSON
app.use(cors()); // Habilitar CORS para todas las rutas


app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
}); // Iniciar el servidor en el puerto 3000

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});
// Definir una ruta GET para la raíz ("/") que responde con un mensaje JSON

app.get("/hora", (req, res) =>{
    const horaActual = new Date().toLocaleTimeString();
    res.json({ hora: horaActual });
}) ; 
// Definir una ruta GET para "/hora" que responde con la hora actual en formato JSON

app.get("/productos", (req, res) =>{
    const productos = JSON.parse(fs.readFileSync("productos.json", "utf-8"));
    res.json(productos);
});
// Definir una ruta GET para "/productos" que responde con una lista de productos desde un archivo JSON


app.post("/productos", (req, res) =>{
    const nuevoProducto = req.body;
    const productos = JSON.parse(fs.readFileSync("productos.json", "utf-8"));
    productos.push(nuevoProducto);
    fs.writeFileSync("productos.json", JSON.stringify(productos, null, 2));
    res.json({ message: "Producto agregado", producto: nuevoProducto });
})