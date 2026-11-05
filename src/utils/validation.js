export function validateBooking(values) {
  const errors = {};
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (!values.date) {
    errors.date = "Choose a reservation date.";
  } else {
    const chosen = new Date(`${values.date}T00:00:00`);
    if (Number.isNaN(chosen.getTime())) errors.date = "Enter a valid date.";
    else if (chosen < today) errors.date = "Choose today or a future date.";
  }

  if (!values.time) errors.time = "Choose an available time.";
  if (!values.guests || !Number.isInteger(Number(values.guests)) || Number(values.guests) < 1 || Number(values.guests) > 10) {
    errors.guests = "Select between 1 and 10 guests.";
  }
  if (!values.occasion) errors.occasion = "Choose an occasion.";
  if (!values.name.trim()) errors.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "Enter a valid email address.";
  return errors;
}
