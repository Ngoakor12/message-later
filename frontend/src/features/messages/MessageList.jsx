import messages from "../../mock-messages";
import MessageSummary from "./MessageSummary";

function MessageList() {
  return (
    <div className="message-list">
      {messages.map((message) => {
        return <MessageSummary message={message} key={message.messageId} />;
      })}
    </div>
  );
}

export default MessageList;
