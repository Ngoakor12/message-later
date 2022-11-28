const { Router } = require("express");
const {
  getMessagesFromServer,
  postMessageToServer,
  deleteMessagesFromServer,
  getMessageFromServer,
  deleteMessageFromServer,
  updateMessageOnServer,
} = require("../controllers/messages-controller");

const router = Router();

router.get("/", getMessagesFromServer);

router.post("/", postMessageToServer);

router.delete("/", deleteMessagesFromServer);

router.get("/:messageId", getMessageFromServer);

router.delete("/:messageId", deleteMessageFromServer);

router.put("/:messageId", updateMessageOnServer);

module.exports = router;
