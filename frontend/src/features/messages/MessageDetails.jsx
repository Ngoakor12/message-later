import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteMessage, getMessage, getMessages } from "../../App";
import {
  BackArrowIcon,
  DeleteIcon,
  EditIcon,
  ForwardArrowIcon,
  PreviousPageIcon,
} from "../../Icons";

function MessageDetails({ messages, setMessages }) {
  const [message, setMessage] = useState();
  const navigate = useNavigate();
  const { messageId } = useParams();
  const newMessage =
    messages?.find((msg) => msg.messageId === Number(messageId)) || message;

  useEffect(() => {
    if (!message) {
      getMessage(messageId).then((res) => {
        setMessage(res.responseData.data);
      });
    }
  });

  function handleClickDelete() {
    if (confirm("Are you sure you want to delete the message?")) {
      deleteMessage(newMessage.messageId).then(() => {
        getMessages().then((res) => setMessages(res.responseData.data));
        navigate(-1);
      });
    }
  }
  return newMessage ? (
    <div className="message-details">
      <div className="top-bar">
        <div className="left-buttons">
          <button
            type="button"
            className="previous-page-icon"
            onClick={() => navigate(-1)}
          >
            <PreviousPageIcon />
          </button>
        </div>
        <div className="right-buttons">
          <Link
            to={`/messages/${newMessage.messageId}/edit`}
            message={newMessage}
            className="edit-icon"
          >
            <EditIcon />
          </Link>
          <button
            className="delete-icon"
            type="button"
            onClick={handleClickDelete}
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
      <div className="body">
        <div className="title-time-recipient">
          <h1 className="title">{newMessage.title}</h1>
          <div className="time-recipient">
            <strong>{newMessage.to}</strong>
            <p>{newMessage?.sentAt}</p>
          </div>
        </div>
        <p className="text">{newMessage.body}</p>
      </div>
      <div className="next-back-buttons">
        <div className="back-button">
          <div className="back-arrow-icon">
            <BackArrowIcon />
          </div>
          <div className="label">Back</div>
        </div>
        <div className="next-button">
          <div className="label">Next</div>
          <div className="next-arrow-icon">
            <ForwardArrowIcon />
          </div>
        </div>
      </div>
    </div>
  ) : (
    "Message loading..."
  );
}

export default MessageDetails;
