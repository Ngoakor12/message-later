require("dotenv").config();
const Pool = require("pg").Pool;
let pool;

const connectionString = process.env.POSTGRES_DB;
if (process.env.ENV) {
  pool = new Pool({
    connectionString,
  });
} else {
  pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "postgres",
    port: "5432",
  });
}

module.exports = { pool };
