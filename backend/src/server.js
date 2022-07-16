const express = require("express");
const app = express();
const messagesRoutes = require("./routes/messages");
const usersRoutes = require("./routes/users.js");
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server running", statusCode: 200 });
});

app.use("/messages", messagesRoutes);
app.use("/users", usersRoutes);

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
