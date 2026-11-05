import { useMemo, useState } from "react";
import { validateBooking } from "../utils/validation.js";

const today = new Date();
const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);

export default function BookingForm({ availableTimes, onDateChange, onSubmit, submitting }) {
  const [values, setValues] = useState({
    date: localDate,
    time: "",
    guests: "2",
    occasion: "",
    name: "",
    email: ""
  });
  const [errors, setErrors] = useState({});
  const [attempted, setAttempted] = useState(false);

  const minDate = useMemo(() => localDate, []);

  function update(field, value) {
    setValues((current) => ({ ...current, [field]: value }));
    if (attempted) {
      const next = { ...values, [field]: value };
      setErrors(validateBooking(next));
    }
  }

  function handleDateChange(event) {
    const date = event.target.value;
    setValues((current) => ({ ...current, date, time: "" }));
    onDateChange(date);
    if (attempted) setErrors(validateBooking({ ...values, date, time: "" }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setAttempted(true);
    const nextErrors = validateBooking(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    await onSubmit(values);
  }

  function fieldError(field) {
    return errors[field] ? <span className="field-error" id={`${field}-error`}>{errors[field]}</span> : null;
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <div className="form-intro">
        <p className="eyebrow">YOUR TABLE IS WAITING</p>
        <h2>Make a reservation</h2>
        <p>Choose your date and time. We will take care of the rest.</p>
      </div>

      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="booking-date">Choose date <span aria-hidden="true">*</span></label>
          <input id="booking-date" type="date" min={minDate} value={values.date}
            onChange={handleDateChange} aria-invalid={Boolean(errors.date)}
            aria-describedby={errors.date ? "date-error" : undefined} required />
          {fieldError("date")}
        </div>

        <div className="form-field">
          <label htmlFor="booking-time">Choose time <span aria-hidden="true">*</span></label>
          <select id="booking-time" value={values.time} onChange={(e) => update("time", e.target.value)}
            aria-invalid={Boolean(errors.time)} aria-describedby={errors.time ? "time-error" : undefined} required>
            <option value="">Select a time</option>
            {availableTimes.map((time) => <option key={time} value={time}>{time}</option>)}
          </select>
          {fieldError("time")}
        </div>

        <div className="form-field">
          <label htmlFor="booking-guests">Number of guests <span aria-hidden="true">*</span></label>
          <select id="booking-guests" value={values.guests} onChange={(e) => update("guests", e.target.value)}
            aria-invalid={Boolean(errors.guests)} aria-describedby={errors.guests ? "guests-error" : undefined} required>
            {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>)}
          </select>
          {fieldError("guests")}
        </div>

        <div className="form-field">
          <label htmlFor="booking-occasion">Occasion <span aria-hidden="true">*</span></label>
          <select id="booking-occasion" value={values.occasion} onChange={(e) => update("occasion", e.target.value)}
            aria-invalid={Boolean(errors.occasion)} aria-describedby={errors.occasion ? "occasion-error" : undefined} required>
            <option value="">Select an occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Date night">Date night</option>
            <option value="Other">Other</option>
          </select>
          {fieldError("occasion")}
        </div>

        <div className="form-field">
          <label htmlFor="booking-name">Full name <span aria-hidden="true">*</span></label>
          <input id="booking-name" type="text" autoComplete="name" value={values.name}
            onChange={(e) => update("name", e.target.value)} placeholder="Your name"
            aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} required />
          {fieldError("name")}
        </div>

        <div className="form-field">
          <label htmlFor="booking-email">Email address <span aria-hidden="true">*</span></label>
          <input id="booking-email" type="email" autoComplete="email" value={values.email}
            onChange={(e) => update("email", e.target.value)} placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} required />
          {fieldError("email")}
        </div>
      </div>

      <button className="button button-yellow submit-button" type="submit" disabled={submitting}>
        {submitting ? "Submitting..." : "Confirm reservation"}
      </button>
      <p className="required-hint">* Required fields</p>
    </form>
  );
}
