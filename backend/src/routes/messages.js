const router = require("express").Router();

// MESSAGES
// get all messages
router.get("/", (req, res) => {
  res.status(200).json({
    messages: [{}],
    statusCode: 200,
  });
});

// create new a message
router.post("/new", (req, res) => {
  res.status(201).json({
    message: {},
    statusCode: 201,
  });
});

// get message with the provided id
router.get("/:id", (req, res) => {
  res.status(200).json({
    message: {},
    statusCode: 200,
  });
});

// edit message with the provided id
router.put("/edit/:id", (req, res) => {
  res.status(200).json({
    message: {},
    statusCode: 200,
  });
});

// delete all messages
router.delete("/delete", (req, res) => {
  res.status(200).json({
    message: {},
    statusCode: 200,
  });
});

// delete message with provided id
router.delete("/delete/:id", (req, res) => {
  res.status(200).json({
    message: {},
    statusCode: 200,
  });
});

module.exports = router;
