import { statusOptions } from "../data/demoLeads";
import { formatCurrency, formatDate } from "../utils/formatters";

export default function LeadCard({ lead, onEdit, onDelete, onQuickStatus }) {
  return (
    <article
      className={`lead-card lead-card--${lead.status.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="lead-card__top">
        <div>
          <p className="lead-card__kicker">{lead.projectType}</p>
          <h3>{lead.name}</h3>
          <p className="lead-card__contact">{lead.contact}</p>
        </div>
        <span className="status-badge">{lead.status}</span>
      </div>

      <div className="lead-card__meta">
        <span>{lead.location || "Location not provided"}</span>
        <span>Created {formatDate(lead.createdAt)}</span>
        <span>Estimate {formatCurrency(lead.estimate)}</span>
      </div>

      <p className="lead-card__message">
        {lead.message || "No message provided yet."}
      </p>

      <div className="lead-card__notes">
        <strong>Notes:</strong> {lead.notes || "No internal notes yet."}
      </div>

      <div className="lead-card__files">
        <strong>Photos:</strong>{" "}
        {lead.photoNames.length
          ? lead.photoNames.join(", ")
          : "No photo names stored"}
      </div>

      <div className="lead-card__actions">
        <label className="lead-card__status-picker">
          <span>Quick status</span>
          <select
            value={lead.status}
            onChange={(event) => onQuickStatus(lead.id, event.target.value)}
          >
            {statusOptions.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </label>

        <div className="lead-card__buttons">
          <button type="button" onClick={onEdit}>
            Edit
          </button>
          <button type="button" className="button-danger" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}
