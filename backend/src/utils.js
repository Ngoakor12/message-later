function validateIds(...ids) {
  ids.forEach((id) => {
    const convertedIdNumber = Number(id);
    if (isNaN(convertedIdNumber)) {
      throw new Error("'id' should be a number. Please try again.");
    }
  });
}

module.exports = { validateIds };
