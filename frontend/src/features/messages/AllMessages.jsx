import { cleanDate, todayLocaleDateString } from "@ngoakor12/date-time-utils";
import MessageList from "./MessageList";

function AllMessages({ messages }) {
  const date = todayLocaleDateString();
  const cleanedDate = cleanDate(date);
  return (
    <main className="all-messages-main">
      <div className="today-date-container">
        <h1>All messages</h1>
        <div className="horizontal-line"></div>
        <div className="today-date">{cleanedDate}</div>
      </div>
      {messages.length ? (
        <MessageList messages={messages} setMessages={setMessages} />
      ) : (
        <div className="no-messages-placeholder">
          <p>No scheduled messages</p>
        </div>
      )}
    </main>
  );
}

export default AllMessages;
