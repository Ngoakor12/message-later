const express = require("express");
const app = express();
const {
  viewMessage,
  viewMessages,
  deleteMessage,
  updateMessage,
  createMessage,
  deleteMessages,
} = require("../db/functions");
const cors = require("cors");
const { pool } = require("../db/config");
const { validateId } = require("./utils");

const PORT = process.env.PORT || 3001;
const API_BASE_URL = `http://localhost:${PORT}`;

app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (_, res) => {
  res.status(200).json({ message: "server working flawlessly" });
});

app.get("/messages", async (_, res) => {
  try {
    const result = await viewMessages();
    res.status(200).json({ success: true, data: result.rows });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: error.stack });
  }
});

app.get("/messages/:id", async (req, res) => {
  const { id } = req.params;

  try {
    validateId(id);

    const result = await viewMessage(id);
    res.status(200).json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: error.stack });
  }
});

app.delete("/messages/:id", async (req, res) => {
  const { id } = req.params;

  try {
    validateId(id);

    await deleteMessage(id);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: error.stack });
  }
});

app.delete("/messages", async (req, res) => {
  try {
    await deleteMessages();
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: error.stack });
  }
});

app.put("/messages/:id", async (req, res) => {
  const { id } = req.params;
  const { name, method, contact, title, body, from, day, time } = req.body;
  try {
    validateId(id);

    await updateMessage(
      id,
      name,
      method,
      contact,
      title,
      body,
      from,
      day,
      time
    );
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: error.stack });
  }
});

app.post("/messages", async (req, res) => {
  const { name, method, contact, title, body, from, day, time } = req.body;
  try {
    await createMessage(name, method, contact, title, body, from, day, time);
    res.status(200).json({ success: true });
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
