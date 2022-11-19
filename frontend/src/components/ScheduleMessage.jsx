function ScheduleMessage() {
  return (
    <form className="schedule-message-form">
      {/* <h1>ScheduleMessage</h1> */}
      <div className="recipient">
        <h2>Recipient</h2>
        <div className="name-field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" />
        </div>
        <div className="contact-field">
          <label htmlFor="contact">Email</label>
          <input id="contact" name="contact" />
        </div>
      </div>
      <div className="message">
        <h2>Message</h2>
        <div className="title-field">
          <label htmlFor="title">Title</label>
          <input id="title" name="title" />
        </div>
        <div className="body-field">
          <label htmlFor="body">Body</label>
          <textarea name="body" id="body" cols="30" rows="5"></textarea>
        </div>
        <div className="from-field">
          <label htmlFor="from">From</label>
          <input id="from" name="from" />
        </div>
      </div>
      <div className="date">
        <h2>Date</h2>
        <div className="date-fields">
          <div className="day-field">
            <label htmlFor="day">Day</label>
            <input type={"date"} id="day" name="day" />
          </div>
          <div className="time-field">
            <label htmlFor="time">Time</label>
            <input type={"time"} id="time" name="time" />
          </div>
        </div>
      </div>
      <div className="schedule-message-buttons">
        <button type={"button"} className="schedule-button">
          Schedule message
        </button>
        <button type={"button"} className="drafts-button">
          Add to drafts
        </button>
        <button type={"button"} className="cancel-button">
          Cancel
        </button>
      </div>
    </form>
  );
}

export default ScheduleMessage;
