import { useEffect, useState } from "react";
import BookingForm from "./BookingForm.jsx";
import { fetchAPI, submitAPI } from "../api/bookingApi.js";

export default function BookingPage() {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedDate, setSelectedDate] = useState(() => {
    const now = new Date();
    return new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  });
  const [submitting, setSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState("");
  const [requestError, setRequestError] = useState("");

  useEffect(() => {
    let active = true;
    fetchAPI(selectedDate)
      .then((times) => { if (active) setAvailableTimes(times); })
      .catch(() => { if (active) setRequestError("We could not load available times. Please try again."); });
    return () => { active = false; };
  }, [selectedDate]);

  function updateTimes(date) {
    setSelectedDate(date);
    setConfirmation("");
    setRequestError("");
  }

  async function submitForm(formData) {
    setSubmitting(true);
    setConfirmation("");
    setRequestError("");
    try {
      const accepted = await submitAPI(formData);
      if (accepted) setConfirmation(`Your table is reserved for ${formData.guests} ${Number(formData.guests) === 1 ? "guest" : "guests"} on ${formData.date} at ${formData.time}. A confirmation will be sent to ${formData.email}.`);
      else setRequestError("We could not confirm your reservation. Please choose another time and try again.");
    } catch {
      setRequestError("Something went wrong while submitting your reservation. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="booking-section" id="booking">
      <div className="booking-layout">
        <div className="booking-aside">
          <p className="eyebrow">DINE WITH US</p>
          <h2>A little time for something delicious.</h2>
          <p>Join us for a relaxed meal inspired by the Mediterranean. Select a date to see available reservation times.</p>
          <div className="opening-hours">
            <h3>Opening hours</h3>
            <p>Tuesday to Friday <span>5:00 PM - 10:00 PM</span></p>
            <p>Saturday and Sunday <span>12:00 PM - 10:00 PM</span></p>
            <p>Monday <span>Closed</span></p>
          </div>
        </div>
        <div className="booking-card">
          <BookingForm availableTimes={availableTimes} onDateChange={updateTimes}
            onSubmit={submitForm} submitting={submitting} />
          {requestError && <p className="status-message error" role="alert">{requestError}</p>}
          {confirmation && <div className="status-message success" role="status">
            <h3>Reservation confirmed</h3><p>{confirmation}</p>
          </div>}
        </div>
      </div>
    </section>
  );
}
