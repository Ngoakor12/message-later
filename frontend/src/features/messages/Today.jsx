import messages from "../../mock-messages";
import MessageList from "./MessageList";

function Today() {
  return (
    <>
      <MessageList messages={messages} />
    </>
  );
}

export default Today;
