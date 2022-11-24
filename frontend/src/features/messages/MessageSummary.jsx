import { Link } from "react-router-dom";
import { DeleteIcon, EditIcon, MoreIcon } from "../../Icons";
import { getTimeFromDate } from "./utils";

function MessageSummary({ message }) {
  return (
    <div className="message-summary-wrapper">
      <Link to={`/message/${message.messageId}`} className="message-summary">
        <div className="left">
          <div className="status-icon"></div>
        </div>
        <div className="center">
          <div className="title">{message.title}</div>
          <div className="bottom">
            <div>{getTimeFromDate(message.sentAt)}</div>
            <div>{message.to}</div>
          </div>
        </div>
      </Link>
      <div className="more-icon">
        <MoreIcon />
      </div>
      <div className="more-options">
        <Link to={"/message/edit/1"} className="edit-icon">
          <EditIcon />
        </Link>
        <Link to={"/"} className="delete-icon">
          <DeleteIcon />
        </Link>
      </div>
    </div>
  );
}

export default MessageSummary;
