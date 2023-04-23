const { Router } = require("express");
const {
  postUserToServer,
  getUserFromServer,
  authWithGoogle,
  logout,
  authCheck,
  requireAuth,
} = require("../controllers/auth-controller");
const passport = require("passport");
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

router.get("/auth/user", authCheck, (req, res) => {
  res.status(200).json({ success: true, user: req.user });
});

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
    console.log("user", req.user);
    res.redirect(CLIENT_URL + "/today");
  }
);

// auth logout
router.get("/auth/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
});

// logout
// router.get("/auth/logout", authWithGoogle);

// router.get("/", getMessagesFromServer);

// router.post("/federated/google", passport.authenticate("google"));

// router.delete("/", deleteMessagesFromServer);

// router.delete("/:messageId", deleteMessageFromServer);

// router.put("/:messageId", updateMessageOnServer);

module.exports = router;
