const {
  viewMessage,
  viewMessages,
  deleteMessage,
  updateMessage,
  createMessage,
  deleteMessages,
} = require("../../database/functions");
const { validateIds } = require("../utils");

async function getMessageFromServer(req, res) {
  const { messageId } = req.params;

  try {
    validateIds(messageId);
    const result = await viewMessage(messageId);
    res.status(200).json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: error.stack });
  }
}

async function getMessagesFromServer(req, res) {
  try {
    const result = await viewMessages();
    res.status(200).json({ success: true, data: result.rows });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: error.stack });
  }
}

async function postMessageToServer(req, res) {
  const { authorId, to, email, title, body, from, day, time } = req.body;

  try {
    validateIds(authorId);
    const result = await createMessage(
      authorId,
      to,
      email,
      title,
      body,
      from,
      day,
      time
    );
    res.status(200).json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: error.stack });
  }
}

async function updateMessageOnServer(req, res) {
  const { messageId } = req.params;
  const { to, email, title, body, from, day, time } = req.body;

  try {
    validateIds(messageId);
    const result = await updateMessage(
      messageId,
      to,
      email,
      title,
      body,
      from,
      day,
      time
    );
    res.status(200).json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: error.stack });
  }
}

async function deleteMessageFromServer(req, res) {
  const { messageId } = req.params;

  try {
    validateIds(messageId);
    await deleteMessage(messageId);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: error.stack });
  }
}

async function deleteMessagesFromServer(req, res) {
  const { authorId } = req.body;

  try {
    validateIds(authorId);
    await deleteMessages(authorId);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: error.stack });
  }
}

module.exports = {
  getMessageFromServer,
  getMessagesFromServer,
  postMessageToServer,
  updateMessageOnServer,
  deleteMessageFromServer,
  deleteMessagesFromServer,
};
