const { pool } = require("./config");

const {
  createMessageTableQuery,
  deleteMessagesTableQuery,
} = require("./queries");

async function createMessagesTable() {
  return await pool.query(createMessageTableQuery);
}

async function deleteTable() {
  return await pool.query(deleteMessagesTableQuery);
}

// createMessagesTable().then((res) => console.log(res));

// deleteTable().then((res) => console.log(res));
