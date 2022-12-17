// export function todayLocaleDateString() {
//   const d = new Date();
//   return d.toLocaleDateString();
// }

// export function cleanDate(date) {
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   const cleanedDateArray = date.substr(0, 10).split("/");
//   const [day, month, year] = cleanedDateArray;
//   return `${day} ${months[Number(month) - 1]} ${year}`;
// }

// export function getTimeFromDate(date) {
//   if (date) {
//     return date.substr(11, 5);
//   }
// }
// export function getYearMonthDayFromDate(date) {
//   if (date) {
//     return date.substr(0, 10);
//   }
// }
// export function convertUTCDateToLocalDate(date) {
//   const newDate = new Date(date);
//   newDate.setMinutes(date.getMinutes() - date.getTimezoneOffset());
//   return newDate;
// }

// export function convertISOStringToDate(date) {
//   const newDate = new Date(date);
//   return newDate;
// }
