function ScheduleMessage() {
  return (
    <form>
      <h1>ScheduleMessage</h1>
      <div>
        <h2>Recipient</h2>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" />
        </div>
        <div>
          <label htmlFor="method">Method</label>
          <input type="radio" id="email" name="method" checked readOnly />
          <label htmlFor="email">Email</label>
          <input type="radio" id="sms" name="method" disabled />
          <label htmlFor="sms">SMS</label>
        </div>
        <div>
          <label htmlFor="contact">Email</label>
          <input id="contact" name="contact" />
        </div>
      </div>
      <div>
        <h2>Message</h2>
        <div>
          <label htmlFor="title">Title</label>
          <input id="title" name="title" />
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <textarea name="body" id="body" cols="30" rows="10"></textarea>
        </div>
        <div>
          <label htmlFor="from">From</label>
          <input id="from" name="from" />
        </div>
      </div>
      <div>
        <h2>Date</h2>
        <div>
          <label htmlFor="day">Day</label>
          <input type={"date"} id="day" name="day" />
        </div>
        <div>
          <label htmlFor="time">Time</label>
          <input type={"time"} id="time" name="time" />
        </div>
      </div>
      <div>
        <button type={"button"}>Submit</button>
        <button type={"button"}>Add to drafts</button>
        <button type={"button"}>Cancel</button>
      </div>
    </form>
  );
}

export default ScheduleMessage;
