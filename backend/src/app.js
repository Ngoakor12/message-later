const express = require("express");
const cors = require("cors");

const {
  viewMessage,
  viewMessages,
  deleteMessage,
  updateMessage,
  createMessage,
  deleteMessages,
} = require("../database/functions");
const { pool } = require("../database/config");
const { validateIds } = require("./utils");

const PORT = process.env.PORT || 3001;
const API_BASE_URL = `http://localhost:${PORT}`;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (_, res) => {
  res.status(200).json({ message: "server working flawlessly" });
});

app.get("/messages", async (req, res) => {
  const { authorId } = req.body;

  try {
    validateIds(authorId);
    const result = await viewMessages(authorId);
    res.status(200).json({ success: true, data: result.rows });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: error.stack });
  }
});

app.get("/messages/:messageId", async (req, res) => {
  const { messageId } = req.params;
  const { authorId } = req.body;

  try {
    validateIds(messageId, authorId);
    const result = await viewMessage(authorId, messageId);
    res.status(200).json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: error.stack });
  }
});

app.delete("/messages/:messageId", async (req, res) => {
  const { messageId } = req.params;
  const { authorId } = req.body;

  try {
    validateIds(authorId, messageId);
    await deleteMessage(authorId, messageId);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: error.stack });
  }
});

app.delete("/messages", async (req, res) => {
  const { authorId } = req.body;

  try {
    validateIds(authorId);
    await deleteMessages(authorId);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: error.stack });
  }
});

app.put("/messages/:messageId", async (req, res) => {
  const { messageId } = req.params;
  const { authorId, to, email, title, body, from, day, time } = req.body;

  try {
    validateIds(authorId, messageId);
    const result = await updateMessage(
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
    res.status(200).json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: error.stack });
  }
});

app.post("/messages", async (req, res) => {
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
});

// connect to db and start server
pool
  .connect()
  .then(() => {
    console.log("Successfully connected to db...");
    app.listen(PORT, () => {
      console.log(`App running at ${API_BASE_URL}`);
    });
  })
  .catch((error) => {
    console.error(error);
    throw new Error(
      "A problem occurred while connecting to the db. Try again later.",
      error
    );
  });
