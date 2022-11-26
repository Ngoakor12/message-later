import MessageSummary from "./MessageSummary";

function MessageList({ messages, setMessages }) {
  return (
    <div className="message-list">
      {messages &&
        messages.data &&
        messages.data.map((message) => {
          return (
            <MessageSummary
              message={message}
              key={message.messageId}
              setMessages={setMessages}
            />
          );
        })}
    </div>
  );
}

export default MessageList;
