const app = require("express")();
const cors = require("cors");

const PORT = 3001;
const API_BASE_URL = `http://localhost:${PORT}`;

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (_, res) => {
  res.status(200).json({ message: "server working flawlessly" });
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`App running at ${API_BASE_URL}`);
});
