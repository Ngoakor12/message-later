export function todayLocaleDateString() {
  const d = new Date();
  return d.toLocaleDateString();
}

export function cleanDate(date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const cleanedDateArray = date.substr(0, 10).split("/");
  const [day, month, year] = cleanedDateArray;
  return `${day} ${months[Number(month) - 1]} ${year}`;
}
