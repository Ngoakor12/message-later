import { Link, useNavigate, useParams } from "react-router-dom";
import {
  BackArrowIcon,
  DeleteIcon,
  EditIcon,
  ForwardArrowIcon,
  PreviousPageIcon,
} from "../../Icons";
import { getTimeFromDate } from "./utils";

function MessageDetails({ messages }) {
  messages = messages || [];
  const navigate = useNavigate();
  const { messageId } = useParams();
  const message =
    messages?.data?.find((msg) => msg.messageId === Number(messageId)) || [];
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
          <div className="delete-icon">
            <DeleteIcon />
          </div>
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
