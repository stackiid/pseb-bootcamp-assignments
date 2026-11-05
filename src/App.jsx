import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import BookingPage from "./components/BookingPage.jsx";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <section className="highlights" id="menu" aria-labelledby="highlights-title">
          <div className="section-heading">
            <div><p className="eyebrow">MADE FRESH DAILY</p><h2 id="highlights-title">A taste of the Mediterranean</h2></div>
            <a className="button button-dark" href="#booking">Book your table</a>
          </div>
          <div className="highlight-grid">
            <article className="highlight-card"><div className="food-image food-one" role="img" aria-label="Fresh Greek salad" /><div className="highlight-content"><h3>Greek salad</h3><p>Crisp vegetables, olives, creamy feta, and our house dressing.</p></div></article>
            <article className="highlight-card"><div className="food-image food-two" role="img" aria-label="Grilled Mediterranean vegetables" /><div className="highlight-content"><h3>Grilled vegetables</h3><p>Seasonal vegetables grilled with herbs and extra virgin olive oil.</p></div></article>
            <article className="highlight-card"><div className="food-image food-three" role="img" aria-label="Lemon dessert" /><div className="highlight-content"><h3>Little lemon dessert</h3><p>A bright, house-made dessert with a fresh citrus finish.</p></div></article>
          </div>
        </section>
        <BookingPage />
        <section className="about-section" id="about">
          <div><p className="eyebrow">OUR STORY</p><h2>Good food brings people together.</h2><p>Little Lemon is a neighbourhood restaurant inspired by the flavours, ingredients, and hospitality of the Mediterranean.</p></div>
          <div className="about-art" role="img" aria-label="A welcoming Mediterranean restaurant interior" />
        </section>
      </main>
      <footer className="site-footer"><span className="footer-logo">LITTLE LEMON</span><span>Chicago, Illinois</span><span>© {new Date().getFullYear()} Little Lemon</span></footer>
    </>
  );
}
