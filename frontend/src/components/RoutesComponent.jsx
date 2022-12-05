import { Routes, Route, Navigate } from "react-router-dom";
import AllMessages from "../features/messages/AllMessages";
import Drafts from "../features/messages/Drafts";
import Today from "../features/messages/Today";
import ScheduleMessage from "./ScheduleMessage";
import MessageDetails from "../features/messages/MessageDetails";
import EditMessage from "./EditMessage";

function RoutesComponent({ messages, setMessages, message, setMessage }) {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Navigate to="/today" replace={true}></Navigate>}
      />
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
          <MessageDetails
            messages={messages}
            message={message}
            setMessages={setMessages}
            setMessage={setMessage}
          />
        }
      />
    </Routes>
  );
}

export default RoutesComponent;
