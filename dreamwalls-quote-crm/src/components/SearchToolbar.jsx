import { statusOptions } from '../data/demoLeads';

export default function SearchToolbar({
  searchTerm,
  onSearchChange,
  statusFilter,
  onStatusChange,
  sortBy,
  onSortChange,
  onCreateNew,
}) {
  return (
    <section className="toolbar" aria-label="Lead filters and actions">
      <div className="toolbar__group">
        <label className="toolbar__field">
          <span>Search</span>
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search name, city, type, contact"
          />
        </label>

        <label className="toolbar__field">
          <span>Status</span>
          <select value={statusFilter} onChange={(event) => onStatusChange(event.target.value)}>
            <option value="All">All</option>
            {statusOptions.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </label>

        <label className="toolbar__field">
          <span>Sort</span>
          <select value={sortBy} onChange={(event) => onSortChange(event.target.value)}>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="updated">Recently Updated</option>
            <option value="estimateHigh">Estimate: High to Low</option>
            <option value="estimateLow">Estimate: Low to High</option>
          </select>
        </label>
      </div>

      <button className="toolbar__button" type="button" onClick={onCreateNew}>
        Add Lead Manually
      </button>
    </section>
  );
}
