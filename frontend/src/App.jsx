import { useEffect, useState } from "react";
import Navigation from "./features/navigation/Navigation";
import RoutesComponent from "./components/RoutesComponent";
import ScheduleMessageButton from "./components/ScheduleMessageButton";

export async function getMessages() {
  const API_PORT = 3001;
  const API_BASE_URL = `http://localhost:${API_PORT}`;
  const url = `${API_BASE_URL}/messages`;
  const res = await fetch(url);
  const data = res.json();
  return data;
}

export async function deleteMessage(messageId) {
  const API_PORT = 3001;
  const API_BASE_URL = `http://localhost:${API_PORT}`;
  const url = `${API_BASE_URL}/messages/${messageId}`;
  if (confirm("Are you sure you want to delete the message?")) {
    const res = await fetch(url, {
      method: "DELETE",
    });
    const data = res.json();
    return data;
  }
}

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages().then((res) => {
      setMessages(res);
    });
  }, []);

  return (
    <div className="App">
      <Navigation />
      <main className="body">
        <RoutesComponent messages={messages} setMessages={setMessages} />
      </main>
      <ScheduleMessageButton />
    </div>
  );
}

export default App;
