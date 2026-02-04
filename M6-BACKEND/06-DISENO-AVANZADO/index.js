const express = require("express");
const cors = require("cors");
const app = express();
const { testConnection, obtenerMedicamentos, obtenerPersonal, obtenerMedicamentosPorFiltros } = require("./consultas");
const fs = require("fs");

app.listen(3000, async () => {
  try {
    await testConnection();
    console.log("Server running on port 3000");
  } catch (error) {
    console.error("Error starting server:", error);
  }
});

app.use(express.json());
app.use(cors());

const middlewareExample = (req, res, next) => {
  const method = req.method;
  const path = req.path;
  const register = (`Request received: ${method} ${path}`);
  fs.appendFileSync("log.txt", register + "\n");
  next();

}
app.use(middlewareExample);

app.get("/medicamentos", async (req, res) => {
  try {
    const queryStrings = req.query;
    console.log("Query Strings:", queryStrings);
    const medicamentos = await obtenerMedicamentos(queryStrings);
    res.json(medicamentos);
  } catch (error) {
    console.error("Error fetching medicamentos:", error);
    res.status(500).json({ error: error.message });
  }
});


app.get("/personal", async (req, res)=>{
  try {
    const queryStrings = req.query;
    const personal = await obtenerPersonal(queryStrings);
    res.json(personal);
  } catch (error) {
    console.error("Error fetching personal:", error);
    res.status(500).json({ error: error.message });
  }
})

app.get('/medicamentos/filtros', async (req, res) => {
 const queryStrings = req.query
 const medicamentos = await obtenerMedicamentosPorFiltros(queryStrings)
 res.json(medicamentos)
})