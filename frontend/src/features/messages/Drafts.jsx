import { cleanDate, todayLocaleDateString } from "@ngoakor12/date-time-utils";

function Drafts() {
  const date = todayLocaleDateString();
  const cleanedDate = cleanDate(date);
  return (
    <main className="drafts-main">
      <div className="today-date-container">
        <h1>Drafts</h1>
        <div className="horizontal-line"></div>
        <div className="today-date">{cleanedDate}</div>
      </div>
    </main>
  );
}

export default Drafts;
