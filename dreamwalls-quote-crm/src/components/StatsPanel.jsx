import { formatCurrency } from '../utils/formatters';

export default function StatsPanel({ leads }) {
  const newCount = leads.filter((lead) => lead.status === 'New').length;
  const activeCount = leads.filter((lead) => ['Contacted', 'Quote Sent', 'Scheduled', 'In Progress'].includes(lead.status)).length;
  const completedCount = leads.filter((lead) => lead.status === 'Completed').length;
  const pipelineValue = leads.reduce((total, lead) => total + Number(lead.estimate || 0), 0);

  const stats = [
    { label: 'Total Leads', value: leads.length },
    { label: 'New Requests', value: newCount },
    { label: 'Active Pipeline', value: activeCount },
    { label: 'Completed Jobs', value: completedCount },
    { label: 'Visible Quote Value', value: formatCurrency(pipelineValue) },
  ];

  return (
    <section className="stats-panel" aria-label="Lead statistics">
      {stats.map((stat) => (
        <article className="stats-card" key={stat.label}>
          <span className="stats-card__label">{stat.label}</span>
          <strong className="stats-card__value">{stat.value}</strong>
        </article>
      ))}
    </section>
  );
}
