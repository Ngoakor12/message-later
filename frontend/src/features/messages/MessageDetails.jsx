import { useParams } from "react-router-dom";
import {
  BackArrowIcon,
  DeleteIcon,
  EditIcon,
  ForwardArrowIcon,
} from "../../Icons";
import messages from "../../mock-messages";

function MessageDetails() {
  const { id } = useParams();
  const message = messages.find((msg) => msg.messageId === Number(id));

  return message ? (
    <div className="message-details">
      <div className="title-edit-time-recipient">
        <div className="title-edit">
          <div className="title">{message.title}</div>
          <div className="edit-delete-buttons">
            <div className="edit-button">
              <div className="label">Edit message</div>
              <div className="edit-icon">
                <EditIcon />
              </div>
            </div>
            <div className="delete-button">
              <div className="label">Delete message</div>
              <div className="delete-icon">
                <DeleteIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="time-recipient">
          <div>{message.time}</div>
          <div>{message.recipientName}</div>
        </div>
      </div>
      <div className="body">
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
