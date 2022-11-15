const app = require("express")();
const { viewMessage, viewMessages } = require("../db/functions");
const cors = require("cors");
const { pool } = require("../db/config");

const PORT = process.env.PORT || 3001;
const API_BASE_URL = `http://localhost:${PORT}`;

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
    res.json({ success: false, error });
  }
});

app.get("/messages/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await viewMessage(id);
    res.status(200).json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error });
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
