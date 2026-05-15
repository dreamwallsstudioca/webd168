import { useMemo, useState } from "react";
import LeadEditorDrawer from "../components/LeadEditorDrawer";
import LeadList from "../components/LeadList";
import SearchToolbar from "../components/SearchToolbar";
import StatsPanel from "../components/StatsPanel";
import { filterLeads, sortLeads } from "../utils/formatters";

export default function DashboardPage({ leads, setLeads }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [selectedLead, setSelectedLead] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const visibleLeads = useMemo(() => {
    const filtered = filterLeads(leads, searchTerm, statusFilter);
    return sortLeads(filtered, sortBy);
  }, [leads, searchTerm, statusFilter, sortBy]);

  function openCreateDrawer() {
    setSelectedLead(null);
    setIsDrawerOpen(true);
  }

  function openEditDrawer(lead) {
    setSelectedLead(lead);
    setIsDrawerOpen(true);
  }

  function closeDrawer() {
    setSelectedLead(null);
    setIsDrawerOpen(false);
  }

  function handleSaveLead(payload) {
    const now = new Date().toISOString();

    if (payload.id) {
      setLeads((current) =>
        current.map((lead) =>
          lead.id === payload.id
            ? {
                ...lead,
                ...payload,
                updatedAt: now,
              }
            : lead,
        ),
      );
    } else {
      const newLead = {
        ...payload,
        id: `lead-${Date.now()}`,
        createdAt: now,
        updatedAt: now,
      };

      setLeads((current) => [newLead, ...current]);
    }

    closeDrawer();
  }

  function handleDeleteLead(id) {
    setLeads((current) => current.filter((lead) => lead.id !== id));
  }

  function handleQuickStatus(id, status) {
    const now = new Date().toISOString();
    setLeads((current) =>
      current.map((lead) =>
        lead.id === id ? { ...lead, status, updatedAt: now } : lead,
      ),
    );
  }

  return (
    <main className="dashboard-page">
      <section className="dashboard-hero">
        <div>
          <p className="crm-kicker">Admin view</p>
          <h1>Quote Request Dashboard</h1>
          <p>
            Review all Dream Walls Studio quote requests in one place. Search,
            filter, sort, edit, update status, and delete as needed.
          </p>
        </div>
      </section>

      <div className="dashboard-layout">
        <StatsPanel leads={leads} />

        <SearchToolbar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          statusFilter={statusFilter}
          onStatusChange={setStatusFilter}
          sortBy={sortBy}
          onSortChange={setSortBy}
          onCreateNew={openCreateDrawer}
        />

        <LeadList
          leads={visibleLeads}
          onEdit={openEditDrawer}
          onDelete={handleDeleteLead}
          onQuickStatus={handleQuickStatus}
        />
      </div>

      <LeadEditorDrawer
        isOpen={isDrawerOpen}
        lead={selectedLead}
        onClose={closeDrawer}
        onSave={handleSaveLead}
      />
    </main>
  );
}
