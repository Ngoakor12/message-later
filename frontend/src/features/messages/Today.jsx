import { useNavigate } from "react-router-dom";
import MessageList from "./MessageList";
import { cleanDate, todayLocaleDateString } from "@ngoakor12/date-time-utils";

function Today({ messages, setMessages, authedUser }) {
  const date = todayLocaleDateString();
  const cleanedDate = cleanDate(date);

  const navigate = useNavigate();

  if (!authedUser) {
    navigate("/login");
  }

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
