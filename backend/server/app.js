const express = require("express");
const cors = require("cors");

const { pool } = require("../database/config");
const messagesRoutes = require("./routes/messages-routes");
const PORT = process.env.PORT || 3001;
const API_BASE_URL = `http://localhost:${PORT}`;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (_, res) => {
  res.status(200).json({ message: "server working flawlessly" });
});

// message routes
app.use("/messages", messagesRoutes);

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
