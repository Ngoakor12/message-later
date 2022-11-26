import { useEffect, useState } from "react";
import MessageList from "./MessageList";
import { cleanDate, getTimeFromDate, todayLocaleDateString } from "./utils";

const API_PORT = 3001;
const API_BASE_URL = `http://localhost:${API_PORT}`;

function Today() {
  const date = todayLocaleDateString();
  const cleanedDate = cleanDate(date);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages().then((res) => {
      setMessages(res);
    });
  }, []);

  async function getMessages() {
    const url = `${API_BASE_URL}/messages`;
    const res = await fetch(url);
    const data = res.json();
    return data;
  }

  return (
    <main className="today-main">
      <div className="today-date-container">
        <div className="horizontal-line"></div>
        <div className="today-date">{cleanedDate}</div>
      </div>
      <MessageList messages={messages} />
    </main>
  );
}

export default Today;
