const serviceGroups = [
  {
    title: 'North County Coastal',
    items: ['Oceanside', 'Carlsbad', 'Encinitas', 'Solana Beach', 'Del Mar'],
  },
  {
    title: 'North County Inland',
    items: ['Escondido', 'San Marcos', 'Vista', 'Poway', 'Rancho Bernardo'],
  },
  {
    title: 'Central San Diego',
    items: ['San Diego', 'Mission Hills', 'North Park', 'Pacific Beach'],
  },
  {
    title: 'East County',
    items: ['La Mesa', 'Santee', 'El Cajon', 'Lemon Grove'],
  },
];

export default function ServiceAreaSection() {
  return (
    <section className="service-area-block" aria-labelledby="service-area-title">
      <div className="service-area-block__grid">
        <div className="service-area-block__content">
          <div className="service-area-block__heading">
            <span className="service-area-block__line" aria-hidden="true" />
            <h2 id="service-area-title">Designed Like a Service Page, Built Like a CRM</h2>
          </div>
          <p className="service-area-block__intro">
            This project intentionally keeps the premium Dream Walls Studio visual language, but adds
            a real lead-management workflow for portfolio and classroom review.
          </p>

          <div className="service-area-accordion service-area-accordion--grid">
            {serviceGroups.map((group) => (
              <article className="service-area-card" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="service-area-block__map">
          <div className="service-area-block__map-frame service-area-block__map-frame--crm">
            <div className="map-placeholder">
              <span className="map-placeholder__eyebrow">Portfolio positioning</span>
              <h3>Why this impresses a professor and an employer</h3>
              <ul>
                <li>Separate React components with clear responsibility</li>
                <li>Functional CRUD workflow with localStorage persistence</li>
                <li>Responsive, premium presentation</li>
                <li>Believable business use case instead of a generic todo app</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
