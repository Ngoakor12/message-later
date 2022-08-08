import { DeleteIcon, EditIcon, MoreIcon } from "../../Icons";

function MessageSummary({ message }) {
  return (
    <div className="message-summary">
      <div className="left">
        <div className="status-icon"></div>
      </div>
      <div className="center">
        <div>{message.title}</div>
        <div className="bottom">
          <div>{message.time}</div>
          <div>{message.recipientName}</div>
        </div>
      </div>
      <div className="right">
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
    </div>
  );
}

export default MessageSummary;
