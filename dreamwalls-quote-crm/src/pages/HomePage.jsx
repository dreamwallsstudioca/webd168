import HeroSection from "../components/HeroSection";
import QuoteFormCard from "../components/QuoteFormCard";
import ServiceAreaSection from "../components/ServiceAreaSection";

export default function HomePage({ leads, setLeads }) {
  function createLead(payload) {
    const now = new Date().toISOString();

    const newLead = {
      id: `lead-${Date.now()}`,
      name: payload.name.trim(),
      contact: payload.contact.trim(),
      location: payload.location.trim(),
      projectType: payload.projectType,
      message: payload.message.trim(),
      photoNames: payload.photoNames || [],
      status: payload.status || "New",
      estimate: payload.estimate,
      notes: payload.notes.trim(),
      createdAt: now,
      updatedAt: now,
    };

    setLeads((current) => [newLead, ...current]);
  }

  return (
    <main className="contact-wrap">
      <HeroSection />
      <QuoteFormCard onCreateLead={createLead} />
      <ServiceAreaSection />

      <section className="portfolio-note" aria-label="Project summary">
        <div className="portfolio-note__inner">
          <p className="crm-kicker">Project summary</p>
          <h2>This is not just a contact page anymore.</h2>
          <p>
            The public form creates CRM records that can be reviewed, updated,
            sorted, filtered, and deleted from the dashboard. That makes it a
            polished React CRUD project instead of a static form.
          </p>
          <p>
            Current local lead count: <strong>{leads.length}</strong>
          </p>
        </div>
      </section>
    </main>
  );
}
