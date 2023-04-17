import { Routes, Route, Navigate } from "react-router-dom";

import AllMessages from "../features/messages/AllMessages";
import Drafts from "../features/messages/Drafts";
import Today from "../features/messages/Today";
import ScheduleMessage from "./ScheduleMessage";
import MessageDetails from "../features/messages/MessageDetails";
import EditMessage from "./EditMessage";
import LandingPage from "./LandingPage";

function RoutesComponent({ messages, setMessages }) {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route
        exact
        path="/today"
        element={<Today messages={messages} setMessages={setMessages} />}
      />
      <Route exact path="/all-messages" element={<AllMessages />} />
      <Route exact path="/drafts" element={<Drafts />} />
      <Route
        exact
        path="/schedule-message"
        element={<ScheduleMessage setMessages={setMessages} />}
      />
      <Route
        exact
        path="/messages/:messageId/edit"
        element={<EditMessage messages={messages} setMessages={setMessages} />}
      />
      <Route
        exact
        path="/messages/:messageId"
        element={
          <MessageDetails messages={messages} setMessages={setMessages} />
        }
      />
    </Routes>
  );
}

export default RoutesComponent;
