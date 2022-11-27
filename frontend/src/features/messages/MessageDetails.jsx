import { useNavigate, useParams } from "react-router-dom";
import { deleteMessage, getMessages } from "../../App";
import {
  BackArrowIcon,
  DeleteIcon,
  EditIcon,
  ForwardArrowIcon,
  PreviousPageIcon,
} from "../../Icons";
import { getTimeFromDate } from "./utils";

function MessageDetails({ messages, setMessages }) {
  messages = messages || [];
  const navigate = useNavigate();
  const { messageId } = useParams();
  const message =
    messages?.data?.find((msg) => msg.messageId === Number(messageId)) || [];

  function handleClickDelete() {
    deleteMessage(message.messageId).then(() => {
      getMessages().then((res) => setMessages(res));
      navigate(-1);
    });
  }
  console.log(messages);
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
          <div className="edit-icon">
            <EditIcon />
          </div>
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
            <p>{getTimeFromDate(message?.sentAt || "")}</p>
            <p>{message.from}</p>
          </div>
        </div>
        <p className="text">{message.body}</p>
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
