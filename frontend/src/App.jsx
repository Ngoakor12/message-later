import Navigation from "./features/navigation/Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Today from "./features/messages/Today";
import AllMessages from "./features/messages/AllMessages";
import Drafts from "./features/messages/Drafts";
import ScheduleMessageButton from "./components/ScheduleMessageButton";
import ScheduleMessage from "./components/ScheduleMessage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main className="body">
        <Routes>
          <Route
            exact
            path="/"
            element={<Navigate to="/today" replace={true}></Navigate>}
          />
          <Route exact path="/today" element={<Today />} />
          <Route exact path="/all-messages" element={<AllMessages />} />
          <Route exact path="/drafts" element={<Drafts />} />
          <Route exact path="/schedule-message" element={<ScheduleMessage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
