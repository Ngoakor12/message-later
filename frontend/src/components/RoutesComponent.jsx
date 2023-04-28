import { Routes, Route } from "react-router-dom";

import AllMessages from "../features/messages/AllMessages";
import Drafts from "../features/messages/Drafts";
import Today from "../features/messages/Today";
import ScheduleMessage from "./ScheduleMessage";
import MessageDetails from "../features/messages/MessageDetails";
import EditMessage from "./EditMessage";
import LandingPage from "./LandingPage";
import Login from "./Login";

function RoutesComponent({
  messages,
  setMessages,
  authedUser,
  setAuthedUser,
  setIsUserLoading,
  isUserLoading,
}) {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route
        exact
        path="/login"
        element={
          <Login setAuthedUser={setAuthedUser} authedUser={authedUser} />
        }
      />
      <Route
        exact
        path="/today"
        element={
          <Today
            messages={messages}
            setMessages={setMessages}
            authedUser={authedUser}
            isUserLoading={isUserLoading}
            setIsUserLoading={setIsUserLoading}
          />
        }
      />
      <Route
        exact
        path="/all-messages"
        element={<AllMessages messages={messages} />}
      />
      <Route exact path="/drafts" element={<Drafts messages={messages} />} />
      <Route
        exact
        path="/schedule-message"
        element={
          <ScheduleMessage setMessages={setMessages} authedUser={authedUser} />
        }
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
