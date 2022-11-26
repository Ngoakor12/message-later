import MessageList from "./MessageList";
import { cleanDate, todayLocaleDateString } from "./utils";

function Today({ messages }) {
  const date = todayLocaleDateString();
  const cleanedDate = cleanDate(date);

  return (
    <main className="today-main">
      <div className="today-date-container">
        <h1>Today</h1>
        <div className="horizontal-line"></div>
        <div className="today-date">{cleanedDate}</div>
      </div>
      <MessageList messages={messages} />
    </main>
  );
}

export default Today;
