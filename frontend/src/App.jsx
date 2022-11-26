import { useEffect, useState } from "react";
import Navigation from "./features/navigation/Navigation";
import RoutesComponent from "./components/RoutesComponent";
import ScheduleMessageButton from "./components/ScheduleMessageButton";

const API_PORT = 3001;
const API_BASE_URL = `http://localhost:${API_PORT}`;

export async function getMessages() {
  const url = `${API_BASE_URL}/messages`;
  const res = await fetch(url);
  const data = res.json();
  return data;
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
        <RoutesComponent messages={messages} />
      </main>
      <ScheduleMessageButton />
    </div>
  );
}

export default App;
