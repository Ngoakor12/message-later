import { useEffect, useState } from "react";
import Navigation from "./features/navigation/Navigation";
import RoutesComponent from "./components/RoutesComponent";
import ScheduleMessageButton from "./components/ScheduleMessageButton";

const API_PORT = 3001;
const API_BASE_URL = `http://localhost:${API_PORT}`;

export async function getMessages() {
  const URL = `${API_BASE_URL}/messages`;
  const response = await fetch(URL);
  const responseData = await response.json();
  return responseData;
}

export async function getMessage(messageId) {
  const URL = `${API_BASE_URL}/messages/${messageId}`;
  const response = await fetch(URL);
  const responseData = await response.json();
  return responseData;
}

export async function deleteMessage(messageId) {
  const URL = `${API_BASE_URL}/messages/${messageId}`;
  const response = await fetch(URL, {
    method: "DELETE",
  });
  const responseData = await response.json();
  return responseData;
}

export async function createMessage(message) {
  const URL = `${API_BASE_URL}/messages`;
  const result = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
  const responseData = await result.json();
  return responseData;
}

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages().then((res) => {
      setMessages(res.responseData.data);
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
