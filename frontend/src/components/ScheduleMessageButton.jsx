import { Link } from "react-router-dom";
import { AddIcon } from "../Icons";

function ScheduleMessageButton() {
  return (
    <Link to={"/schedule-message"} className="schedule-message-button">
      <div className="label">Schedule Message</div>
      <div className="add-icon">
        <AddIcon />
      </div>
    </Link>
  );
}

export default ScheduleMessageButton;
