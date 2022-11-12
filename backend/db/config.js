require("dotenv").config();
const Pool = require("pg").Pool;

const connectionString = process.env.POSTGRES_DB;

const pool = new Pool({
  connectionString,
});

module.exports = { pool };
