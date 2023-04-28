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
const { CLIENT_BASE_URL } = require("../app");

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
    failureRedirect: CLIENT_BASE_URL + "/login",
    successRedirect: CLIENT_BASE_URL + "/today",
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    console.log("user", req.user);
  }
);

// auth logout
router.get("/auth/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res
        .status(400)
        .json({ success: false, message: `Error logging out ${err}` });
    } else {
      res
        .status(200)
        .json({ success: true, message: `Successfully logged out` });
    }
  });

  // res.redirect("/");
});

// logout
// router.get("/auth/logout", authWithGoogle);

// router.get("/", getMessagesFromServer);

// router.post("/federated/google", passport.authenticate("google"));

// router.delete("/", deleteMessagesFromServer);

// router.delete("/:messageId", deleteMessageFromServer);

// router.put("/:messageId", updateMessageOnServer);

module.exports = router;
