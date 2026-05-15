export function formatDate(dateString) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(dateString));
}

export function formatCurrency(amount) {
  if (!amount && amount !== 0) {
    return '—';
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(Number(amount));
}

export function sortLeads(leads, sortBy) {
  const copy = [...leads];

  switch (sortBy) {
    case 'oldest':
      return copy.sort(
        (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
    case 'estimateHigh':
      return copy.sort((a, b) => Number(b.estimate || 0) - Number(a.estimate || 0));
    case 'estimateLow':
      return copy.sort((a, b) => Number(a.estimate || 0) - Number(b.estimate || 0));
    case 'updated':
      return copy.sort(
        (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      );
    case 'newest':
    default:
      return copy.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
  }
}

export function filterLeads(leads, searchTerm, statusFilter) {
  const normalizedSearch = searchTerm.trim().toLowerCase();

  return leads.filter((lead) => {
    const matchesStatus = statusFilter === 'All' || lead.status === statusFilter;
    const matchesSearch =
      !normalizedSearch ||
      lead.name.toLowerCase().includes(normalizedSearch) ||
      lead.location.toLowerCase().includes(normalizedSearch) ||
      lead.projectType.toLowerCase().includes(normalizedSearch) ||
      lead.contact.toLowerCase().includes(normalizedSearch);

    return matchesStatus && matchesSearch;
  });
}
