import messages from "../../mock-messages";
import MessageList from "./MessageList";

function Today() {
  return (
    <main className="today-main">
      <div className="today-date-container">
        <div className="horizontal-line"></div>
        <div className="today-date">20 September 2022</div>
      </div>
      <MessageList messages={messages} />
    </main>
  );
}

export default Today;
