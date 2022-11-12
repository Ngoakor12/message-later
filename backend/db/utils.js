function validateResultWithId(resObject) {
  if (resObject.rowCount === 0) {
    throw new Error("message with that id does not exist");
  }
}

module.exports = validateResultWithId;
