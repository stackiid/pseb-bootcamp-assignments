export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Little Lemon home">
        <span className="brand-mark" aria-hidden="true">●</span>
        <span>LITTLE LEMON</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#about">About</a>
        <a className="nav-cta" href="#booking">Reservations</a>
      </nav>
    </header>
  );
}
