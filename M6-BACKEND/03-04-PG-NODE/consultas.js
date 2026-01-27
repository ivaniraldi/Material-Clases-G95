const pool = require("./database/db");

const agregarViaje = async (destino, presupuesto) => {
  try {
    const consulta = "INSERT INTO viajes values (DEFAULT, $1, $2)";
    const values = [destino, presupuesto];
    const result = await pool.query(consulta, values);
    console.log("Viaje agregado");
  } catch (error) {
    console.log(error);
    if (error.code === "22P02") {
      throw {
        code: 500,
        message: "Formato invalido en uno de los campos",
      };
    }
    throw { error };
  }
};

const obtenerViajes = async () => {
  const consulta = "SELECT * FROM viajes";
  const result = await pool.query(consulta);
  console.log(result.rows);
  return result.rows;
};

const agregarEquipamiento = async (nombre) => {
  const consulta = "INSERT INTO equipamiento values (DEFAULT, $1)";
  const values = [nombre];
  const result = await pool.query(consulta, values);
  console.log("Equipamiento agregado");
};

const obtenerEquipamiento = async () => {
  const consulta = "SELECT * FROM equipamiento";
  const result = await pool.query(consulta);
  return result.rows;
};

const obtenerEquipamientoPorId = async (id) => {
  try {
    const consulta = "SELECT * FROM equipamiento WHERE id = $1";
    const values = [id];
    const result = await pool.query(consulta, values);
    if (result.rows.length === 0) {
      throw new Error("Equipamiento no encontrado");
    }
  } catch (error) {
    return { error: error.message };
  }
};

const modificarPresupuesto = async (presupuesto, id) => {
  const consulta = "UPDATE viajes SET presupuesto = $1 WHERE id = $2";
  const values = [presupuesto, id];
  try {
    const result = await pool.query(consulta, values);
    if (result.rowCount === 0) {
      console.log("No se encontró el viaje con el ID proporcionado");
      throw new Error("Viaje no encontrado");
    }
    console.log(result);
    console.log("Presupuesto modificado");
  } catch (error) {
    console.log("Error al modificar el presupuesto:", error.message);
    throw { error: error.message };
  }
};

const modificarEquipamiento = async (nombre, id) => {
  const consulta = "UPDATE equipamiento SET nombre = $1 WHERE id = $2";
  const values = [nombre, id];
  try {
    const result = await pool.query(consulta, values);
    if (result.rowCount === 0) {
      console.log("No se encontró el equipamiento con el ID proporcionado");
      throw new Error("Equipamiento no encontrado");
    }
    console.log("Equipamiento modificado");
  } catch (error) {
    throw { error: error.message };
  }
};

const eliminarViaje = async (id) => {
  const consulta = "DELETE FROM viajes WHERE id = $1";
  try {
    const result = await pool.query(consulta, [id]);

    if (result.rowCount === 0) {
      throw new Error("Viaje no encontrado");
    }

    console.log("Viaje eliminado");
  } catch (error) {
    throw { error: error.message };
  }
};

const eliminarEquipamiento = async (id) => {
  const consulta = "DELETE FROM equipamiento WHERE id = $1";
  const values = [id];
  try {
    const result = await pool.query(consulta, values);
    if (result.rowCount === 0) {
      throw new Error("Equipamiento no encontrado");
    }
    console.log("Viaje eliminado");
  } catch (error) {
    throw { error: error.message };
  }
};

module.exports = {
  agregarViaje,
  obtenerViajes,
  agregarEquipamiento,
  obtenerEquipamiento,
  obtenerEquipamientoPorId,
  modificarPresupuesto,
  modificarEquipamiento,
  eliminarViaje,
  eliminarEquipamiento,
};
