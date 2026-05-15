import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="hero-contact crm-hero" aria-label="Dream Walls Studio Quote CRM hero">
      <div className="hero-contact__overlay" />
      <div className="hero-contact__inner crm-hero__inner">
        <p className="crm-kicker">Luxury service workflow</p>
        <h1>Dream Walls Studio Quote CRM</h1>
        <p>Collect beautiful quote requests and manage every lead in one polished dashboard.</p>
        <p>
          This portfolio version keeps the elegant feel of your Dream Walls Studio contact page,
          while turning the form into a real CRM experience.
        </p>
        <div className="hero-contact__actions crm-hero__actions">
          <a className="hero-pill" href="#quote-form">
            Submit a Quote Request
          </a>
          <Link className="hero-pill hero-pill--ghost" to="/dashboard">
            Open CRM Dashboard
          </Link>
        </div>
      </div>
    </section>
  );
}
