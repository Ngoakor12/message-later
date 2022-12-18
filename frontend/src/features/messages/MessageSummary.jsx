import { Link } from "react-router-dom";
import { getTimeFromDate } from "@ngoakor12/date-time-utils";

import { deleteMessage } from "../../App";
import { DeleteIcon, EditIcon, MoreIcon } from "../../Icons";
import { DELETE_MESSAGE_CONFIRM, DELETE_MESSAGE_ERROR } from "../../constants";

function MessageSummary({ message, setMessages }) {
  async function handleClickDelete() {
    if (confirm(DELETE_MESSAGE_CONFIRM)) {
      const result = await deleteMessage(message.messageId);
      if (result.success) {
        setMessages((prevMessages) => {
          const newMessages = prevMessages.filter(
            (prevMessage) => prevMessage.messageId !== result.messageId
          );
          return newMessages;
        });
      } else {
        console.log(DELETE_MESSAGE_ERROR);
        alert(DELETE_MESSAGE_ERROR);
      }
    }
  }
  return (
    <div className="message-summary-wrapper">
      <Link to={`/messages/${message.messageId}`} className="message-summary">
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
        <Link to={`/messages/${message.messageId}/edit`} className="edit-icon">
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
