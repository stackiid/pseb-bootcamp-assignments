/*
 * Standalone demo adapter for the capstone.
 * If your Coursera starter project supplies fetchAPI and submitAPI,
 * keep those supplied functions and connect App.jsx to them instead.
 */

const TIMES = ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"];

export function fetchAPI(date) {
  return new Promise((resolve) => {
    const parsed = new Date(`${date}T12:00:00`);
    const seed = Number.isNaN(parsed.getTime()) ? 0 : parsed.getDate() + parsed.getMonth();
    const available = TIMES.filter((_, index) => (index + seed) % 4 !== 0);
    window.setTimeout(() => resolve(available.length ? available : TIMES), 120);
  });
}

export function submitAPI(formData) {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(Boolean(formData && formData.date && formData.time)), 180);
  });
}
