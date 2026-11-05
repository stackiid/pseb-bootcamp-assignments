export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="eyebrow">CHICAGO · MEDITERRANEAN KITCHEN</p>
        <h1>Little Lemon</h1>
        <h2>Fresh flavours. Good company.</h2>
        <p>Seasonal ingredients, bold Mediterranean flavours, and a warm table waiting for you.</p>
        <a className="button button-yellow" href="#booking">Reserve a table</a>
      </div>
      <div className="hero-image" role="img" aria-label="Mediterranean dishes served at a restaurant table" />
    </section>
  );
}
