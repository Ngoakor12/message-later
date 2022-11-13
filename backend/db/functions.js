const { pool } = require("./config");

const {
  createMessageTableQuery,
  deleteMessagesTableQuery,
  createMessageQuery,
  deleteMessageQuery,
  deleteMessagesQuery,
  viewMessageQuery,
} = require("./queries");
const validateResultWithId = require("./utils");

async function createMessagesTable() {
  return await pool.query(createMessageTableQuery);
}

async function deleteMessagesTable() {
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
  const result = await pool.query(deleteMessageQuery, [id]);
  validateResultWithId(result);
  return result;
}

async function deleteMessages() {
  const result = await pool.query(deleteMessagesQuery);
  return result;
}

async function viewMessage(id) {
  const result = await pool.query(viewMessageQuery, [id]);
  validateResultWithId(result);
  return result;
}

// createMessagesTable().then((res) => console.log(res));

// deleteMessagesTable().then((res) => console.log(res));

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

// deleteMessages(0).then((res) => console.log(res));

// viewMessage(0).then((res) => console.log(res));
