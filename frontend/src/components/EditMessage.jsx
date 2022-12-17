import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateMessage } from "../App";
import {
  getTimeFromDate,
  getYearMonthDayFromDate,
} from "@ngoakor12/date-time-utils";
import { disableButtonOrLink } from "@ngoakor12/date-time-utils";

function dayMonthYear(dateString) {
  const [year, month, day] = dateString.split("-");
  return `${month}-${day}-${year}`;
}

function EditMessage({ messages, setMessages }) {
  const { messageId } = useParams();
  const [message, setMessage] = useState({});
  const [formValues, setFormValues] = useState({
    to: "",
    email: "",
    title: "",
    body: "",
    from: "",
    day: "",
    time: "",
    isDraft: false,
  });
  const [hasFormValuesChanged, setHasFormValuesChanged] = useState(false);

  useEffect(() => {
    const foundMessage =
      messages?.find((msg) => msg.messageId === Number(messageId)) || {};
    setMessage(foundMessage);
    setFormValues({
      to: message.to,
      email: message.email,
      title: message.title,
      body: message.body,
      from: message.from,
      day: getYearMonthDayFromDate(message.sentAt),
      time: getTimeFromDate(message.sentAt),
      isDraft: false,
    });
  }, [message]);

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
      if (confirm("Cancel editing message?")) {
        navigate(-1);
      }
    } else {
      navigate(-1);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const data = { authorId: 2, ...formValues, isDraft: false };
    const result = await updateMessage(messageId, data);
    if (result.success) {
      // update messages list
      const newMessage = result.responseData.data;
      await setMessages((prevMessages) => {
        return [...prevMessages, newMessage];
      });
      // navigate to message details path
      navigate(`/messages/${messageId}`);
    } else {
      console.log(
        "Something went wrong. Message not updated. Please try again."
      );
    }
  }

  async function handleClickDraft() {
    const data = { authorId: 2, ...formValues, isDraft: true };
    const result = await updateMessage(messageId, data);
    if (result.success) {
      // update messages list
      const newMessage = result.responseData.data;
      await setMessages((prevMessages) => {
        return [...prevMessages, newMessage];
      });
      // navigate to message details path
      navigate(`/messages/${messageId}`);
    } else {
      console.log(
        "Something went wrong. Message not updated. Please try again."
      );
    }
  }

  return message ? (
    <form className="schedule-message-form" onSubmit={handleSubmit}>
      <h2>Edit Message</h2>
      <div className="recipient">
        <h3>Recipient</h3>
        <div className="to-field">
          <label htmlFor="to">To</label>
          <input
            id="to"
            name="to"
            onChange={handleChange}
            defaultValue={message.to}
          />
        </div>
        <div className="email-field">
          <label htmlFor="email">
            Email{" "}
            <span className="required-label-text">
              <em>{"(required)"}</em>
            </span>
          </label>
          <input
            id="email"
            name="email"
            required
            onChange={handleChange}
            defaultValue={message.email}
          />
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
          <input
            id="title"
            name="title"
            required
            onChange={handleChange}
            defaultValue={message.title}
          />
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
            defaultValue={message.body}
          ></textarea>
        </div>
        <div className="from-field">
          <label htmlFor="from">From</label>
          <input
            id="from"
            name="from"
            onChange={handleChange}
            defaultValue={message.from}
          />
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
              defaultValue={getYearMonthDayFromDate(message.sentAt)}
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
              defaultValue={getTimeFromDate(message.sentAt)}
            />
          </div>
        </div>
      </div>
      <div className="schedule-message-buttons">
        <button
          type={"submit"}
          className={`schedule-button ${
            disableButtonOrLink(!hasFormValuesChanged) ? "disabled-button" : ""
          }`}
          disabled={disableButtonOrLink(!hasFormValuesChanged)}
        >
          Schedule message
        </button>
        <button
          type={"button"}
          className={`drafts-button ${
            message.isDraft
              ? disableButtonOrLink(!hasFormValuesChanged)
                ? "disabled-button"
                : ""
              : ""
          }`}
          onClick={handleClickDraft}
          disabled={
            message.isDraft ? disableButtonOrLink(!hasFormValuesChanged) : false
          }
        >
          {`${message.isDraft ? `Update draft` : `Save as draft`}`}
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
  ) : (
    <p>Loading...</p>
  );
}

export default EditMessage;
