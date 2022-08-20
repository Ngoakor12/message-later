import messages from "../../mock-messages";
import MessageList from "./MessageList";
import { cleanDate, todayLocaleDateString } from "./utils";

function Today() {
  const date = todayLocaleDateString();
  const cleanedDate = cleanDate(date);

  return (
    <main className="today-main">
      <div className="today-date-container">
        <div className="horizontal-line"></div>
        <div className="today-date">{cleanedDate}</div>
      </div>
      <MessageList messages={messages} />
    </main>
  );
}

export default Today;
