const { pool } = require("./config");

const {
  createMessageTableQuery,
  deleteMessagesTableQuery,
  createMessageQuery,
  deleteMessageQuery,
  viewMessageQuery,
} = require("./queries");

async function createMessagesTable() {
  return await pool.query(createMessageTableQuery);
}

async function deleteTable() {
  return await pool.query(deleteMessagesTableQuery);
}

async function createMessage(
  name,
  method,
  contact,
  title,
  body,
  from,
  day,
  time
) {
  return await pool.query(createMessageQuery, [
    name,
    method,
    contact,
    title,
    body,
    from,
    day,
    time,
  ]);
}

async function deleteMessage(id) {
  return await pool.query(deleteMessageQuery, [id]);
}

async function viewMessage(id) {
  return await pool.query(viewMessageQuery, [id]);
}

// createMessagesTable().then((res) => console.log(res));

// deleteTable().then((res) => console.log(res));

// createMessage(
//   "halaand",
//   "email",
//   "halaand@mancity.com",
//   "question",
//   "are you a robot?",
//   "not police",
//   "12-12-2022",
//   "12:00"
// ).then((res) => console.log(res));

// deleteMessage(0).then((res) => console.log(res));

// viewMessage(1).then((res) => console.log(res));
