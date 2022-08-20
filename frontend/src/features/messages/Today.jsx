import messages from "../../mock-messages";
import MessageList from "./MessageList";

function todayLocaleDateString() {
  const d = new Date();
  return d.toLocaleDateString();
}

function cleanDate(date) {
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

function Today() {
  const date = todayLocaleDateString();

  return (
    <main className="today-main">
      <div className="today-date-container">
        <div className="horizontal-line"></div>
        <div className="today-date">{cleanDate(date)}</div>
      </div>
      <MessageList messages={messages} />
    </main>
  );
}

export default Today;
