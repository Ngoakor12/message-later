import { useEffect, useState } from "react";
import MessageList from "./MessageList";
import { cleanDate, getTimeFromDate, todayLocaleDateString } from "./utils";

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
    const url = "http://localhost:3001/messages";
    const res = await fetch(url);
    const data = res.json();
    return data;
  }

  if (messages.data) {
    getTimeFromDate(messages.data[0].sentAt);
  }

  console.log(messages);

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
