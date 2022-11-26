import MessageList from "./MessageList";
import { cleanDate, todayLocaleDateString } from "./utils";

function Today({ messages, setMessages }) {
  const date = todayLocaleDateString();
  const cleanedDate = cleanDate(date);

  return (
    <main className="today-main">
      <div className="today-date-container">
        <h1>Today</h1>
        <div className="horizontal-line"></div>
        <div className="today-date">{cleanedDate}</div>
      </div>
      <MessageList messages={messages} setMessages={setMessages} />
    </main>
  );
}

export default Today;
