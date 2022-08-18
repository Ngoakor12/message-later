import { Link, useParams } from "react-router-dom";
import {
  BackArrowIcon,
  DeleteIcon,
  EditIcon,
  ForwardArrowIcon,
  PreviousPageIcon,
} from "../../Icons";
import messages from "../../mock-messages";

function MessageDetails() {
  const { id } = useParams();
  const message = messages.find((msg) => msg.messageId === Number(id));

  return message ? (
    <div className="message-details">
      <div className="top-bar">
        <div className="left-buttons">
          <Link to={"/today"} className="previous-page-icon">
            <PreviousPageIcon />
          </Link>
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
          <div className="title">{message.title}</div>
          <div className="time-recipient">
            <div>{message.time}</div>
            <div>{message.recipientName}</div>
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
