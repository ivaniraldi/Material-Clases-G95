const { Pool } = require("pg");
const format = require("pg-format");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "0298",
  database: "farmacia",
  port: 5432,
  allowExitOnIdle: true,
});

const testConnection = async () => {
  try {
    const result = await pool.query("SELECT NOW()");
    console.log("DB Connected:", result.rows[0].now);
  } catch (error) {
    console.error("Error connecting to DB:", error);
  }
};

const obtenerMedicamentos = async ({
  limit = 3,
  order_by = "id_ASC",
  page = 0,
}) => {
  try {
    const [campo, direccion] = order_by.split("_");
    const offset = page * limit;
    const formattedQuery = format(
      "SELECT * FROM medicamentos order by %s %s LIMIT %s OFFSET %s",
      campo,
      direccion,
      limit,
      offset,
      // SELECT * FROM medicamentos order by id ASC LIMIT 3 OFFSET 1
    );
    pool.query(formattedQuery);
    const { rows: medicamentos } = await pool.query(formattedQuery);
    if (medicamentos.length === 0) {
      throw new Error("No hay medicamentos registrados");
    } else
      return {
        page,
        limit,
        results: medicamentos,
      };
  } catch (error) {
    throw error;
  }
};

const obtenerMedicamentosPorFiltros = async ({ stock_min, precio_max }) => { // Ejemplo: { stock_min: 20, precio_max: 4000 }
  let filtros = []; // ["stock >= 20", "precio <= 4000"]
  if (stock_min) filtros.push(`stock >= ${stock_min}`); // AQUI AGREGA AL ARRAY "filtros" EL STRING "stock >= 20" filtros = ["stock >= 20"] 
  if (precio_max) filtros.push(`precio <= ${precio_max}`); // AQUI AGREGA AL ARRAY "filtros" EL STRING "precio <= 4000" filtros = ["stock >= 20", "precio <= 4000"]


  let consulta = "SELECT * FROM medicamentos";


  if (filtros.length > 0) { // SI EL ARRAY DE filtros TIENE ALGO ADENTRO
    filtros = filtros.join(" AND "); //AGREGA UN "AND" ENTRE TODOS LOS STRINGS QUE TENGA EL ARRAY DE filtros= ["stock >= 20", " AND ", "precio <= 4000"]
    consulta += ` WHERE ${filtros}`; // LE SUMA A LA CONSULTA PRINCIPAL "SELECT * FROM medicamentos" LA PARTE DE "WHERE stock >= 20 AND precio <= 4000"
    // QUEDANDO ASI: "SELECT * FROM medicamentos WHERE stock >= 20 AND precio <= 4000"
  }
  const { rows: medicamentos } = await pool.query(consulta);
  return medicamentos;
};

const obtenerPersonal = async ({
  limit = 10,
  order_by = "id_ASC",
  page = 0,
}) => {
  try {
    const [campo, direccion] = order_by.split("_"); // "id_ASC" => ["id", "ASC"]
    const offset = page * limit;
    const formattedQuery = format(
      "SELECT * FROM personal order by %s %s LIMIT %s OFFSET %s",
      campo,
      direccion,
      limit,
      offset,
    ); // SELECT * FROM personal order by id ASC LIMIT 10 OFFSET 0
    const result = await pool.query(formattedQuery);

    if (result.rows.length === 0) {
      throw new Error("No hay personal registrado");
    } else
      return {
        page,
        limit,
        results: result.rows,
      };
  } catch (error) {
    throw error;
  }
};

module.exports = { testConnection, obtenerMedicamentos, obtenerPersonal, obtenerMedicamentosPorFiltros };
