const express = require("express");
const cookieSession = require("cookie-session");
const cors = require("cors");
const passport = require("passport");
const passportSetup = require("./passport-setup");

const { pool } = require("../database/config");
const messagesRoutes = require("./routes/messages-routes");
const authRoutes = require("./routes/auth-routes");
const PORT = process.env.PORT || 3001;
const API_BASE_URL = `http://localhost:${PORT}`;

const app = express();

// set up session cookies
app.use(
  cookieSession({
    name: "session",
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  })
);

// register regenerate & save after the cookieSession middleware initialization
app.use(function (request, response, next) {
  if (request.session && !request.session.regenerate) {
    request.session.regenerate = (cb) => {
      cb();
    };
  }
  if (request.session && !request.session.save) {
    request.session.save = (cb) => {
      cb();
    };
  }
  next();
});

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.get("/", (_, res) => {
  res.status(200).json({ message: "server working flawlessly" });
});

// message routes
app.use("/messages", messagesRoutes);

// auth routes
app.use("/users", authRoutes);

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
