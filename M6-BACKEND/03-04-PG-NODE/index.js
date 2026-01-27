const express = require("express");
const cors = require("cors");
const pool = require("./database/db");
const {
  agregarViaje,
  obtenerViajes,
  agregarEquipamiento,
  obtenerEquipamiento,
  obtenerEquipamientoPorId,
  modificarPresupuesto,
  modificarEquipamiento,
  eliminarViaje,
  eliminarEquipamiento,
} = require("./consultas");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server corriendo en http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

app.get("/viajes", async (req, res) => {
  const viajes = await obtenerViajes();
  res.json(viajes);
});

app.get("/equipamiento", async (req, res) => {
  const equipamiento = await obtenerEquipamiento();
  res.json(equipamiento);
});

app.post("/viajes", async (req, res) => {
  const viaje = req.body;
  try {
    await agregarViaje(viaje.destino, viaje.presupuesto);
    res.status(201).json({ message: "Viaje agregado" });
  } catch (error) {
    res.status(error.code).send(error.message);
  }
});

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
    res.send(error);
  }
});

app.put("/viajes/:id", async (req, res) => {
  const { id } = req.params;
  const { presupuesto } = req.query;
  try {
    await modificarPresupuesto(presupuesto, id);
    res.send("Presupuesto modificado con éxito");
  } catch (error) {
    res.send(error);
  }
});

app.put("/equipamiento/:id", async (req, res) => {
  const parametros = req.params;
  const query_strings = req.query;

  console.log(query_strings);
  try {
    await modificarEquipamiento(query_strings.nombre, parametros.id);
    res.send("Equipamiento modificado con éxito");
  } catch (error) {
    res.send(error);
  }
});

app.delete("/viajes/:id", async (req, res) => {
  const parametros = req.params;
  try {
    await eliminarViaje(parametros.id);
    res.send("Viaje eliminado con éxito");
  } catch (error) {
    res.send(error);
  }
});

app.delete("/equipamiento/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await eliminarEquipamiento(id);
    res.send("Equipamiento eliminado con éxito.");
  } catch (error) {
    res.status(404).send(error);
  }
});
