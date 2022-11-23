function validateResultWithId(resObject) {
  if (
    (resObject.command === "INSERT" ||
      resObject.command === "SELECT" ||
      resObject.command === "UPDATE" ||
      resObject.command === "DELETE") &&
    resObject.rowCount === 0
  ) {
    throw new Error(
      `current user is unable to ${resObject.command} that resource because they are not authorized or it doesn't exist`
    );
  }
}

function validateArguments(...args) {
  args.forEach((arg, idx) => {
    if (arg === undefined || arg === null)
      throw new Error(
        `"${arg}" in position ${idx} is not a valid argument. Please provide valid arguments for all the required parameters`
      );
  });
}

function createUCTDate(date, time) {
  const [month, day, year] = date.split("-");
  const [hours, seconds] = time.split(":");
  const newDate = new Date(year, month - 1, day, hours, seconds);
  return newDate;
}

function convertUTCDateToLocalDate(date) {
  const newDate = new Date(date);
  newDate.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  return newDate;
}

function convertDateToISOString(date) {
  const newDate = date.toISOString();
  return newDate;
}

function getCurrentUCTDate() {
  const date = new Date();
  return date;
}

module.exports = {
  validateResultWithId,
  validateArguments,
  createUCTDate,
  convertUTCDateToLocalDate,
  convertDateToISOString,
  getCurrentUCTDate,
};

// const uctD = createUCTDate("12-12-2022", "13:00");
// const localD = convertUTCDateToLocalDate(uctD);
// const uctDString = convertDateToISOString(uctD);
// const localDString = convertDateToISOString(localD);
// console.log("uct", uctD);
// console.log("local", localD);
// console.log("uct string", uctDString);
// console.log("local string", localDString);

// const uctD = getCurrentUCTDate();
// const localD = convertUTCDateToLocalDate(uctD);
// const localDString = convertDateToISOString(localD);
// console.log(uctD);
