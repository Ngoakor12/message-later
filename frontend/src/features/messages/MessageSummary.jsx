import { Link } from "react-router-dom";
import { deleteMessage, getMessages } from "../../App";
import { DeleteIcon, EditIcon, MoreIcon } from "../../Icons";
import { getTimeFromDate } from "./utils";

function MessageSummary({ message, setMessages }) {
  function handleClickDelete() {
    deleteMessage(message.messageId).then(() => {
      getMessages().then((res) => setMessages(res));
    });
  }
  return (
    <div className="message-summary-wrapper">
      <Link
        to={`/messages/${message.messageId}`}
        className="message-summary"
        message={message}
      >
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
        <Link
          to={`/messages/${message.messageId}/edit`}
          className="edit-icon"
          message={message}
        >
          <EditIcon />
        </Link>
        <button className="delete-icon" onClick={handleClickDelete}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}

export default MessageSummary;
