import ScheduleMessageButton from "../../components/ScheduleMessageButton";
import messages from "../../mock-messages";
import MessageSummary from "./MessageSummary";

function Today() {
  return (
    <>
      <h2>Today</h2>
      {messages.map((message) => {
        return <MessageSummary message={message} />;
      })}
      <ScheduleMessageButton />
    </>
  );
}

export default Today;
