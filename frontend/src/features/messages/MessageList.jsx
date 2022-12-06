import MessageSummary from "./MessageSummary";

function MessageList({ messages, setMessages }) {
  console.log(messages);
  return (
    messages && (
      <div className="message-list">
        {messages.map((message) => {
          return (
            <MessageSummary
              message={message}
              key={message.messageId}
              setMessages={setMessages}
            />
          );
        })}
      </div>
    )
  );
}

export default MessageList;
