import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { deleteMessage, getMessage } from "../../App";
import { DELETE_MESSAGE_CONFIRM, DELETE_MESSAGE_ERROR } from "../../constants";
import { DeleteIcon, EditIcon, PreviousPageIcon } from "../../Icons";

function MessageDetails({ setMessages }) {
  const [message, setMessage] = useState();
  const navigate = useNavigate();
  const { messageId } = useParams();

  useEffect(() => {
    if (!message) {
      getMessage(messageId).then((res) => {
        if (res.success) {
          setMessage(res.responseData.data);
        }
      });
    }
  });

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
        // redirect to messages page
        navigate("/today");
      } else {
        console.log(DELETE_MESSAGE_ERROR);
        alert(DELETE_MESSAGE_ERROR);
      }
    }
  }

  return message ? (
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
            to={`/messages/${message.messageId}/edit`}
            message={message}
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
          <h1 className="title">{message.title}</h1>
          <div className="time-recipient">
            <strong>{message.to}</strong>
            <p>{message?.sentAt}</p>
          </div>
        </div>
        <p className="text">{message.body}</p>
      </div>
      {/* <div className="next-back-buttons">
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
      </div> */}
    </div>
  ) : (
    "Message loading..."
  );
}

export default MessageDetails;
