import ScheduleMessageButton from "../../components/ScheduleMessageButton";
import messages from "../../mock-messages";
import MessageList from "./MessageList";

function Today() {
  return (
    <>
      <MessageList messages={messages} />
      <ScheduleMessageButton />
    </>
  );
}

export default Today;
