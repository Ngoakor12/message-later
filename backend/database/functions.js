const { pool } = require("./config");

const { messageQuery, userQuery } = require("./queries");
const {
  validateResultWithId,
  getCurrentUCTDate,
  convertDateToISOString,
  createUCTDate,
  validateArguments,
} = require("./utils");

async function createUsersTable() {
  return await pool.query(userQuery.createTable);
}

async function createMessagesTable() {
  return await pool.query(messageQuery.createTable);
}

async function deleteMessagesTable() {
  return await pool.query(messageQuery.deleteTable);
}

async function deleteUsersTable() {
  return await pool.query(userQuery.deleteTable);
}

async function createUser(email, firstName, lastName, hashedPassword) {
  validateArguments(email, firstName, lastName, hashedPassword);

  const createdAt = convertDateToISOString(getCurrentUCTDate());
  const updateAt = createdAt;

  const result = await pool.query(userQuery.create, [
    email,
    firstName,
    lastName,
    createdAt,
    updateAt,
    hashedPassword,
  ]);
  validateResultWithId(result);
  return result;
}

async function createMessage(
  authorId,
  to,
  email,
  title,
  body,
  from,
  day,
  time
) {
  validateArguments(authorId, to, email, title, body, from, day, time);

  // verify that user with "authorId" exists before creating a message with that id
  viewUser(authorId);

  const createdAt = convertDateToISOString(getCurrentUCTDate());
  const updatedAt = createdAt;
  const sentAt = convertDateToISOString(createUCTDate(day, time));

  const result = await pool.query(messageQuery.create, [
    authorId,
    to,
    email,
    title,
    body,
    from,
    createdAt,
    updatedAt,
    sentAt,
  ]);
  validateResultWithId(result);
  return result;
}

async function deleteMessage(messageId) {
  validateArguments(messageId);
  const result = await pool.query(messageQuery.delete, [messageId]);
  validateResultWithId(result);
  return result;
}

async function deleteMessages(authorId) {
  validateArguments(authorId);
  const result = await pool.query(messageQuery.deleteAll, [authorId]);
  validateResultWithId(result);
  return result;
}

async function viewUser(authorId) {
  validateArguments(authorId);
  const result = await pool.query(userQuery.view, [authorId]);
  validateResultWithId(result);
  return result;
}

async function viewMessage(authorId, messageId) {
  validateArguments(authorId, messageId);
  const result = await pool.query(messageQuery.view, [authorId, messageId]);
  validateResultWithId(result);
  return result;
}

async function viewMessages() {
  const result = await pool.query(messageQuery.viewAll);
  return result;
}

async function updateMessage(
  authorId,
  messageId,
  to,
  email,
  title,
  body,
  from,
  day,
  time
) {
  validateArguments(
    authorId,
    messageId,
    to,
    email,
    title,
    body,
    from,
    day,
    time
  );

  const updatedAt = convertDateToISOString(getCurrentUCTDate());
  const sentAt = convertDateToISOString(createUCTDate(day, time));

  const result = await pool.query(messageQuery.update, [
    authorId,
    messageId,
    to,
    email,
    title,
    body,
    from,
    updatedAt,
    sentAt,
  ]);
  validateResultWithId(result);
  return result;
}

module.exports = {
  createMessagesTable,
  deleteMessagesTable,
  createMessage,
  deleteMessage,
  deleteMessages,
  updateMessage,
  viewMessage,
  viewMessages,
};

// createUsersTable().then((res) => {
//   console.log(res);
// createMessagesTable().then((res) => console.log(res));
// });

// deleteMessagesTable().then((res) => {
// console.log(res);
//   deleteUsersTable().then((res) => console.log(res));
// });

// createUser("test2@email.com", "jane", "doe", "123").then((res) =>
//   console.log(res)
// );

// createMessage(
//   2,
//   "halaand",
//   "halaand@mancity.com",
//   "question",
//   "are you a robot?",
//   "not police",
//   "12-06-2023",
//   "06:00"
// ).then((res) => console.log(res));

// deleteMessage(1, 4).then((res) => console.log(res));

// deleteMessages(1).then((res) => console.log(res));

// viewMessage(2, 2).then((res) => console.log(res));

// updateMessage(
//   1,
//   3,
//   "de bruyne",
//   "debruyne@mancity.com",
//   "question",
//   "are you a robot?",
//   "not police",
//   "12-12-2022",
//   "15:00"
// ).then((res) => console.log(res));

// viewMessages(2).then((res) => console.log(res));
