const { Router } = require("express");
const {
  postUserToServer,
  getUserFromServer,
  authWithGoogle,
  logout,
  authCheck,
} = require("../controllers/auth-controller");
const passport = require("passport");
const { ClientBase } = require("pg");
const CLIENT_URL = "http://localhost:5173";
// const passport = require("passport");
// const GoogleStrategy = require("passport-google-oidc");
// const {
//   getMessagesFromServer,
//   postMessageToServer,
//   deleteMessagesFromServer,
//   getMessageFromServer,
//   deleteMessageFromServer,
//   updateMessageOnServer,
// } = require("../controllers/messages-controller");

const router = Router();

router.post("/", authCheck, postUserToServer);

router.get("/:userId", authCheck, getUserFromServer);

// auth with google
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/redirect",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    failureRedirect: CLIENT_URL + "/login",
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect(CLIENT_URL + "/today");
  }
);

// auth logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL + "/login");
});

// logout
// router.get("/auth/logout", authWithGoogle);

// router.get("/", getMessagesFromServer);

// router.post("/federated/google", passport.authenticate("google"));

// router.delete("/", deleteMessagesFromServer);

// router.delete("/:messageId", deleteMessageFromServer);

// router.put("/:messageId", updateMessageOnServer);

module.exports = router;
