const { pool } = require("./config");

const {
  createMessageTableQuery,
  deleteMessagesTableQuery,
  createMessageQuery,
  deleteMessageQuery,
  deleteMessagesQuery,
  viewMessageQuery,
  viewMessagesQuery,
  updateMessageQuery,
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

async function viewMessages() {
  const result = await pool.query(viewMessagesQuery);
  return result;
}

async function updateMessage(
  id,
  name,
  method,
  contact,
  title,
  body,
  from,
  day,
  time
) {
  const result = await pool.query(updateMessageQuery, [
    id,
    name,
    method,
    contact,
    title,
    body,
    from,
    day,
    time,
  ]);
  validateResultWithId(result);
  return result;
}

module.exports = {
  createMessagesTable,
  deleteMessagesTable,
  createMessage,
  deleteMessages,
  updateMessage,
  viewMessage,
  viewMessages,
};

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

// updateMessage(
//   2,
//   "de bruyne",
//   "email",
//   "debruyne@mancity.com",
//   "question",
//   "are you a robot?",
//   "not police",
//   "12-12-2022",
//   "12:00"
// ).then((res) => console.log(res));

// viewMessages().then((res) => console.log(res));
