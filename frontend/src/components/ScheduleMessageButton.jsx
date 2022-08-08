import { Link } from "react-router-dom";
import { AddIcon } from "../Icons";

function ScheduleMessageButton() {
  return (
    <Link to={"/schedule-message"}>
      <div>Schedule Message</div>
      <div>
        <AddIcon />
      </div>
    </Link>
  );
}

export default ScheduleMessageButton;
