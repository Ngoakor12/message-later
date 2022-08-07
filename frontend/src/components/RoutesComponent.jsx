import { Routes, Route, Navigate } from "react-router-dom";
import AllMessages from "../features/messages/AllMessages";
import Drafts from "../features/messages/Drafts";
import Today from "../features/messages/Today";
import ScheduleMessage from "./ScheduleMessage";

function RoutesComponent() {
  return (
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
  );
}

export default RoutesComponent;
