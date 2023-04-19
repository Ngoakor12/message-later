const { Router } = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oidc");
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

router.post("/federated/google", passport.authenticate("google"));

// router.delete("/", deleteMessagesFromServer);

// router.get("/:messageId", getMessageFromServer);

// router.delete("/:messageId", deleteMessageFromServer);

// router.put("/:messageId", updateMessageOnServer);

module.exports = router;
