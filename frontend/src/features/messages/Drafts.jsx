import { cleanDate, todayLocaleDateString } from "@ngoakor12/date-time-utils";
import MessageList from "./MessageList";

function Drafts({ messages }) {
  const date = todayLocaleDateString();
  const cleanedDate = cleanDate(date);
  return (
    <main className="drafts-main">
      <div className="today-date-container">
        <h1>Drafts</h1>
        <div className="horizontal-line"></div>
        <div className="today-date">{cleanedDate}</div>
      </div>
      {messages.length ? (
        <MessageList messages={messages} setMessages={setMessages} />
      ) : (
        <div className="no-messages-placeholder">
          <p>No drafts</p>
        </div>
      )}
    </main>
  );
}

export default Drafts;
