import MessageSummary from "./MessageSummary";

function MessageList({ messages }) {
  return (
    <div className="message-list">
      {messages &&
        messages.data &&
        messages.data.map((message) => {
          return <MessageSummary message={message} key={message.messageId} />;
        })}
    </div>
  );
}

export default MessageList;
