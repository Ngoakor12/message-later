import ScheduleMessageButton from "../../components/ScheduleMessageButton";
import messages from "../../mock-messages";
import MessageList from "./MessageList";

function Today() {
  return (
    <>
      <h2>Today</h2>
      <MessageList messages={messages} />
      <ScheduleMessageButton />
    </>
  );
}

export default Today;
