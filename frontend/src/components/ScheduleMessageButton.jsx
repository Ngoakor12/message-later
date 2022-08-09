import { Link, useLocation } from "react-router-dom";
import { AddIcon } from "../Icons";

function ScheduleMessageButton() {
  const { pathname } = useLocation();
  const newPath = pathname.split("/")[1];

  return (
    <Link
      to={"/schedule-message"}
      className={`schedule-message-button ${
        newPath === "schedule-message" ? "hide-schedule-message-button" : ""
      }`}
    >
      <div className="label">Schedule Message</div>
      <div className="add-icon">
        <AddIcon />
      </div>
    </Link>
  );
}

export default ScheduleMessageButton;
