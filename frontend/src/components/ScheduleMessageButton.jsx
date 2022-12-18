import { Link, useLocation } from "react-router-dom";
import { AddIcon } from "../Icons";

function ScheduleMessageButton() {
  const { pathname } = useLocation();
  const messageId = pathname.split("/")[2];

  return (
    <Link
      to={"/schedule-message"}
      className={`schedule-message-button ${
        pathname === "/schedule-message" ||
        pathname === `/messages/${messageId}/edit`
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
