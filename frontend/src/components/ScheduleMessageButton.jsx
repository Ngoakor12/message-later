import { Link, useLocation } from "react-router-dom";
import { AddIcon } from "../Icons";

function ScheduleMessageButton() {
  const { pathname } = useLocation();

  return (
    <Link
      to={"/schedule-message"}
      className={`schedule-message-button ${
        pathname === "/schedule-message" || pathname === `/message/edit/1`
          ? "hide-schedule-message-button"
          : ""
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
