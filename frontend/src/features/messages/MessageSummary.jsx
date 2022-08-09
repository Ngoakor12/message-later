import { Link } from "react-router-dom";
import { DeleteIcon, EditIcon, MoreIcon } from "../../Icons";

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
            <div>{message.time}</div>
            <div>{message.recipientName}</div>
          </div>
        </div>
      </Link>
      <div className="more-icon">
        <MoreIcon />
      </div>
      <div className="more-options">
        <div className="edit-icon">
          <EditIcon />
        </div>
        <div className="delete-icon">
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
}

export default MessageSummary;
