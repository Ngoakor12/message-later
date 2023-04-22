const { Router } = require("express");
const {
  postUserToServer,
  getUserFromServer,
} = require("../controllers/auth-controller");
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

// router.get("/", getMessagesFromServer);

// router.post("/federated/google", passport.authenticate("google"));

router.post("/", postUserToServer);

// router.delete("/", deleteMessagesFromServer);

router.get("/:userId", getUserFromServer);

// router.delete("/:messageId", deleteMessageFromServer);

// router.put("/:messageId", updateMessageOnServer);

module.exports = router;
