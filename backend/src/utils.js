function validateId(id) {
  const convertedIdNumber = Number(id);
  if (typeof convertedIdNumber !== "number") {
    throw new Error("'id' should be a number. Please try again.");
  }
}

module.exports = { validateId };
