require("dotenv").config();
const Pool = require("pg").Pool;

const connectionString = process.env.POSTGRES_DB;

let pool = new Pool({
  user: process.env.POSTGRES_USER || "postgres",
  host: process.env.POSTGRES_HOST || "localhost",
  database: process.env.POSTGRES_DB || "postgres",
  password: process.env.POSTGRES_PASSWORD || "postgres",
  port: process.env.POSTGRES_PORT || "5432",
});

if (connectionString) {
  pool = new Pool({
    connectionString,
  });
}

module.exports = { pool };
