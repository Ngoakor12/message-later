import { useNavigate } from "react-router-dom";
import MessageList from "./MessageList";
import { cleanDate, todayLocaleDateString } from "@ngoakor12/date-time-utils";
import { useEffect } from "react";

function Today({ messages, setMessages, authedUser, isUserLoading }) {
  const date = todayLocaleDateString();
  const cleanedDate = cleanDate(date);

  const navigate = useNavigate();

  useEffect(() => {
    if (authedUser === null) {
      navigate("/login");
    }
  }, [authedUser]);

  if (isUserLoading) return <div>Loading...</div>;

  return (
    <main className="today-main">
      <div className="today-date-container">
        <h1>Today</h1>
        <div className="horizontal-line"></div>
        <div className="today-date">{cleanedDate}</div>
      </div>
      {messages.length ? (
        <MessageList messages={messages} setMessages={setMessages} />
      ) : (
        <div className="no-messages-placeholder">
          <p>No scheduled messages today</p>
        </div>
      )}
    </main>
  );
}

export default Today;
