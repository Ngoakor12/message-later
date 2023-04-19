import { cleanDate, todayLocaleDateString } from "@ngoakor12/date-time-utils";

function AllMessages() {
  const date = todayLocaleDateString();
  const cleanedDate = cleanDate(date);
  return (
    <main className="all-messages-main">
      <div className="today-date-container">
        <h1>All messages</h1>
        <div className="horizontal-line"></div>
        <div className="today-date">{cleanedDate}</div>
      </div>
    </main>
  );
}

export default AllMessages;
