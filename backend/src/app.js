const express = require("express");
const cors = require("cors");

const {
  viewMessage,
  viewMessages,
  deleteMessage,
  updateMessage,
  createMessage,
  deleteMessages,
} = require("../db/functions");
const { pool } = require("../db/config");
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
  const { userId } = req.body;

  try {
    validateIds(userId);
    const result = await viewMessages(userId);
    res.status(200).json({ success: true, data: result.rows });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: error.stack });
  }
});

app.get("/messages/:messageId", async (req, res) => {
  const { messageId } = req.params;
  const { userId } = req.body;

  try {
    validateIds(messageId, userId);
    const result = await viewMessage(userId, messageId);
    res.status(200).json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: error.stack });
  }
});

app.delete("/messages/:messageId", async (req, res) => {
  const { messageId } = req.params;
  const { userId } = req.body;

  try {
    validateIds(userId, messageId);
    await deleteMessage(userId, messageId);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: error.stack });
  }
});

app.delete("/messages", async (req, res) => {
  const { userId } = req.body;

  try {
    validateIds(userId);
    await deleteMessages(userId);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: error.stack });
  }
});

app.put("/messages/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, title, body, from, day, time } = req.body;

  try {
    validateIds(id);
    const result = await updateMessage(
      id,
      name,
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
  .then(async () => {
    console.log("Successfully connected to db...");
    app.listen(PORT, () => {
      console.log(`App running at ${API_BASE_URL}`);
    });
  })
  .catch((error) => {
    throw new Error(
      "A problem occurred while connecting to the db. Try again later.",
      error
    );
  });
