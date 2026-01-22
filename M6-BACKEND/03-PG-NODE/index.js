const express = require('express');
const cors = require('cors');
const pool = require('./database/db');
const { agregarViaje, obtenerViajes, agregarEquipamiento, obtenerEquipamiento, obtenerEquipamientoPorId } = require('./consultas');


const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.listen(PORT, ()=>{
    console.log(`Server corriendo en http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

app.get("/viajes", async (req, res)=>{
    const viajes = await obtenerViajes()
    res.json(viajes);
})

app.get("/equipamiento", async (req, res)=>{
    const equipamiento = await obtenerEquipamiento()
    res.json(equipamiento);
})

app.post("/viajes", async (req, res) =>{
    const viaje = req.body;

    await agregarViaje(viaje.destino, viaje.presupuesto);

    res.json({message: "Viaje agregado"});
})

app.post("/equipamiento", async (req, res) => {
  const { nombre } = req.body;
  await agregarEquipamiento(nombre);
  res.json({ mensaje: "Equipamiento agregado correctamente" });
});

app.get("/equipamiento/:id", async (req, res) => {
  const { id } = req.params;
    try {
         const equipamiento = await obtenerEquipamientoPorId(id);
  res.json(equipamiento);
    } catch (error) {
        res.json({ error: "Error al obtener el equipamiento por ID" });
    }
});