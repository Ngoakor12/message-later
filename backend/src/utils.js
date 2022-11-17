function validateId(id) {
  if (!typeof Number(id) !== "number") {
    throw new Error("'id' should be a number. Please try again.");
  }
}

module.exports = { validateId };
