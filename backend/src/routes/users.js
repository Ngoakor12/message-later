const router = require("express").Router();

// USERS
// get all users
router.get("/", (req, res) => {});

// add user
router.post("/new", (req, res) => {});

// delete all users
router.get("/delete", (req, res) => {});

// get user with provided id
router.get("/:id", (req, res) => {});

// edit user with provided id
router.put("/edit/:id", (req, res) => {});

// delete user with provided id
router.delete("/delete/:id", (req, res) => {});

module.exports = router;
