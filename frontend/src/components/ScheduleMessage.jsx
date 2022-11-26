import { useState } from "react";

function ScheduleMessage() {
  const [formValues, setFormValues] = useState({
    to: "",
    email: "",
    title: "",
    body: "",
    from: "",
    day: "",
    time: "",
  });

  function handleChange(e) {
    const { value, name } = e.target;
    setFormValues((prevFormValues) => {
      return { ...prevFormValues, [name]: value };
    });
  }

  console.log(formValues);

  return (
    <form className="schedule-message-form">
      {/* <h2>ScheduleMessage</h2> */}
      <div className="recipient">
        <h3>Recipient</h3>
        <div className="to-field">
          <label htmlFor="name">To</label>
          <input id="to" name="to" onChange={handleChange} />
        </div>
        <div className="email-field">
          <label htmlFor="contact">
            Email{" "}
            <span className="required-label-text">
              <em>{"(required)"}</em>
            </span>
          </label>
          <input id="email" name="email" required onChange={handleChange} />
        </div>
      </div>
      <div className="message">
        <h3>Message</h3>
        <div className="title-field">
          <label htmlFor="title">
            Title{" "}
            <span className="required-label-text">
              <em>{"(required)"}</em>
            </span>
          </label>
          <input id="title" name="title" required onChange={handleChange} />
        </div>
        <div className="body-field">
          <label htmlFor="body">
            Body{" "}
            <span className="required-label-text">
              <em>{"(required)"}</em>
            </span>
          </label>
          <textarea
            name="body"
            id="body"
            cols="30"
            rows="5"
            required
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="from-field">
          <label htmlFor="from">From</label>
          <input id="from" name="from" onChange={handleChange} />
        </div>
      </div>
      <div className="date">
        <h3>Date</h3>
        <div className="date-fields">
          <div className="day-field">
            <label htmlFor="day">
              Day{" "}
              <span className="required-label-text">
                <em>{"(required)"}</em>
              </span>
            </label>
            <input
              type={"date"}
              id="day"
              name="day"
              required
              onChange={handleChange}
            />
          </div>
          <div className="time-field">
            <label htmlFor="time">
              Time{" "}
              <span className="required-label-text">
                <em>{"(required)"}</em>
              </span>
            </label>
            <input
              type={"time"}
              id="time"
              name="time"
              required
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="schedule-message-buttons">
        <button type={"submit"} className="schedule-button">
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
