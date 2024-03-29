const {
  getCurrentUCTDate,
  convertDateToISOString,
  createUCTDate,
} = require("@ngoakor12/date-time-utils");
const { pool } = require("./config");
const { messageQuery, userQuery } = require("./queries");
const { validateResultWithId, validateArguments } = require("./utils");

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

async function createUser(email, firstName, lastName, googleId) {
  validateArguments(email, firstName, lastName, googleId);

  const createdAt = convertDateToISOString(getCurrentUCTDate());
  const updateAt = createdAt;

  const result = await pool.query(userQuery.create, [
    email,
    firstName,
    lastName,
    createdAt,
    updateAt,
    googleId,
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
  time,
  isDraft = false
) {
  validateArguments(authorId, to, email, title, body, from, day, time, isDraft);

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
    isDraft,
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

async function viewUser(userId) {
  validateArguments(userId);
  const result = await pool.query(userQuery.view, [userId]);
  // validateResultWithId(result);
  return result;
}

async function viewGoogleUser(googleId) {
  // validateArguments(googleId);
  const result = await pool.query(userQuery.viewGoogle, [googleId]);
  // validateResultWithId(result);
  return result;
}

async function viewMessage(messageId) {
  // try {
  validateArguments(messageId);
  const result = await pool.query(messageQuery.view, [messageId]);
  // validateResultWithId(result);
  return result;
  // } catch (error) {
  //   const VIEW_MESSAGE_ERROR = "Something went wrong while viewing message";
  //   console.log(VIEW_MESSAGE_ERROR);
  //   throw new Error(VIEW_MESSAGE_ERROR);
  // }
}

async function viewMessages() {
  const result = await pool.query(messageQuery.viewAll);
  return result;
}

async function updateMessage(
  messageId,
  to,
  email,
  title,
  body,
  from,
  day,
  time,
  isDraft = false
) {
  validateArguments(
    messageId,
    to,
    email,
    title,
    body,
    from,
    day,
    time,
    isDraft
  );

  const updatedAt = convertDateToISOString(getCurrentUCTDate());
  const sentAt = convertDateToISOString(createUCTDate(day, time));

  const result = await pool.query(messageQuery.update, [
    messageId,
    to,
    email,
    title,
    body,
    from,
    updatedAt,
    sentAt,
    isDraft,
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
  viewGoogleUser,
  viewUser,
  createUser,
};

// createUsersTable().then((res) => {
//   console.log(res);
//   createMessagesTable().then((res) => console.log(res));
// });

// deleteMessagesTable().then((res) => {
//   console.log(res);
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
//   48,
//   "de bruyne",
//   "debruyne@mancity.com",
//   "question",
//   "are you a robot?",
//   "not police",
//   "12-12-2022",
//   "15:00"
// ).then((res) => console.log(res));

// viewMessages(2).then((res) => console.log(res));
