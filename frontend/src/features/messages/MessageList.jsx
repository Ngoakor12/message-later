import MessageSummary from "./MessageSummary";

function MessageList({ messages, setMessages }) {
  console.log(messages);
  return (
    <div className="message-list">
      {messages?.map((message) => {
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
