import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createMessage } from "../App";

function dayMonthYear(dateString) {
  const [year, month, day] = dateString.split("-");
  return `${month}-${day}-${year}`;
}

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
  const [hasFormValuesChanged, setHasFormValuesChanged] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    const { value, name } = e.target;
    setFormValues((prevFormValues) => {
      if (name === "day") {
        return { ...prevFormValues, [name]: dayMonthYear(value) };
      }
      return { ...prevFormValues, [name]: value };
    });
    setHasFormValuesChanged(true);
  }

  function handleClickCancel() {
    if (hasFormValuesChanged) {
      if (confirm("Discard message?")) {
        navigate(-1);
      }
    } else {
      navigate(-1);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const data = { authorId: 2, ...formValues };
    const result = await createMessage(data);
    const newMessage = await result.responseData.data;
    navigate(`/messages/${newMessage.messageId}`);
  }

  return (
    <form className="schedule-message-form" onSubmit={handleSubmit}>
      {/* <h2>ScheduleMessage</h2> */}
      <div className="recipient">
        <h3>Recipient</h3>
        <div className="to-field">
          <label htmlFor="to">To</label>
          <input id="to" name="to" onChange={handleChange} />
        </div>
        <div className="email-field">
          <label htmlFor="email">
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
        <button
          type={"button"}
          className="cancel-button"
          onClick={handleClickCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default ScheduleMessage;
