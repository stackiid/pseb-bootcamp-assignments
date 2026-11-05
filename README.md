# Little Lemon | Front-End Developer Capstone

A responsive React restaurant website with an accessible table reservation form. This project demonstrates component-based UI development, parent-managed booking availability, client-side validation, API adapter functions, and unit tests.

## Features

- Responsive restaurant landing page and reservation section.
- Semantic HTML landmarks and accessible form labels.
- Date-based available-time loading.
- Booking state and available times managed by the parent booking page.
- Client-side validation for date, time, guest count, occasion, name, and email.
- Submission, loading, success, and error states.
- Unit tests for validation and booking form behavior.
- Reduced-motion support and keyboard-visible focus styles.

## Tech stack

- React 18
- Vite
- JavaScript (ES modules)
- CSS
- Vitest
- React Testing Library

## Requirements

- Node.js 18 or newer
- npm

## Setup

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd little-lemon-capstone
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Tests

Run the test suite:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

## Production build

```bash
npm run build
npm run preview
```

## Booking API adapter

The standalone project includes `src/api/bookingApi.js` with asynchronous demo implementations of `fetchAPI(date)` and `submitAPI(formData)`. They simulate the availability and reservation responses so the project runs without a backend.

If your Coursera starter project provides the course API functions, use those supplied functions instead. Keep the function signatures compatible:

- `fetchAPI(date)` returns an array of available time strings.
- `submitAPI(formData)` returns a boolean indicating whether the reservation was accepted.

The demo adapter does not create a real restaurant reservation or send an email.

## Main project structure

```text
src/
  api/
    bookingApi.js
  components/
    BookingForm.jsx
    BookingForm.test.jsx
    BookingPage.jsx
    Header.jsx
    Hero.jsx
  test/
    setup.js
  utils/
    validation.js
    validation.test.js
  App.jsx
  main.jsx
  styles.css
```

## Accessibility and UX checks

- Every input has a visible associated label.
- Validation errors are associated with fields through `aria-describedby`.
- Invalid fields expose `aria-invalid`.
- Submission feedback uses `role="status"` or `role="alert"`.
- A skip link supports keyboard navigation.
- Interactive elements have visible focus styles.
- Layout adapts to mobile, tablet, and desktop widths.

## Before submission

1. Run `npm install`.
2. Run `npm test` and confirm all tests pass.
3. Run `npm run build` and confirm the production build succeeds.
4. Test the form with valid and invalid values.
5. Check the layout at mobile and desktop widths.
6. Replace the demo API adapter with the supplied course API if your course starter includes it.
7. Push the complete project to a public GitHub repository.
8. Submit the repository URL on Coursera.

## Credits

This project is an educational implementation of the Little Lemon restaurant booking capstone brief. Restaurant imagery is loaded from Unsplash.
