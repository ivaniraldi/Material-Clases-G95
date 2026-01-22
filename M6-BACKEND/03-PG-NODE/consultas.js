const pool = require("./database/db");

const agregarViaje = async (destino, presupuesto) => {
  const consulta = "INSERT INTO viajes values (DEFAULT, $1, $2)";

  const values = [destino, presupuesto];

  const result = await pool.query(consulta, values);

  console.log("Viaje agregado");
};

const obtenerViajes = async () =>{
    const consulta = "SELECT * FROM viajes"
    const result = await pool.query(consulta);
    console.log(result.rows);
    return result.rows;
}

const agregarEquipamiento = async (nombre) => {
  const consulta = "INSERT INTO equipamiento values (DEFAULT, $1)";
  const values = [nombre];
  const result = await pool.query(consulta, values);
  console.log("Equipamiento agregado");
}

const obtenerEquipamiento = async () => {
  const consulta = "SELECT * FROM equipamiento";
  const result = await pool.query(consulta);
  return result.rows;
}

const obtenerEquipamientoPorId = async (id) => {

 try {
    const consulta = "SELECT * FROM equipamiento WHERE id = $1" ;
  const values = [id];
  const result = await pool.query(consulta, values);
  return result.rows;
 } catch (error) {
  return { error: "Error al obtener el equipamiento por ID" }
 }
}


module.exports = { agregarViaje, obtenerViajes, agregarEquipamiento, obtenerEquipamiento, obtenerEquipamientoPorId };

