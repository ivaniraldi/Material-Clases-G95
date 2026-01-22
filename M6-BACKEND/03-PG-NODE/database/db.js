const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    port: 5432,
    database: process.env.PG_DB,
    allowExitOnIdle: true
})

const getDate = async () => {
    const res = await pool.query("SELECT NOW()");
    console.log("Base de datos conectada y funcionando a las: " + res.rows[0].now)
}

getDate();

module.exports = pool;
