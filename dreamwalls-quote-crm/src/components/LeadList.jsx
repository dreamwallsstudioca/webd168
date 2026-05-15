import LeadCard from './LeadCard';
import EmptyState from './EmptyState';

export default function LeadList({ leads, onEdit, onDelete, onQuickStatus }) {
  if (!leads.length) {
    return <EmptyState />;
  }

  return (
    <section className="lead-list" aria-label="Lead list">
      {leads.map((lead) => (
        <LeadCard
          key={lead.id}
          lead={lead}
          onEdit={() => onEdit(lead)}
          onDelete={() => onDelete(lead.id)}
          onQuickStatus={(status) => onQuickStatus(lead.id, status)}
        />
      ))}
    </section>
  );
}
