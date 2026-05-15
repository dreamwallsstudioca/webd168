export const demoLeads = [
  {
    id: 'lead-1001',
    name: 'Olivia Bennett',
    contact: 'olivia@example.com',
    location: 'La Jolla, CA',
    projectType: 'Wallpaper installation',
    message:
      'Primary bedroom accent wall with a textured designer paper. Looking for installation next week.',
    photoNames: ['bedroom-wall.jpg'],
    status: 'New',
    estimate: 850,
    notes: 'Requested morning appointment. Mentioned she already has the wallpaper on site.',
    createdAt: '2026-03-24T16:45:00.000Z',
    updatedAt: '2026-03-24T16:45:00.000Z',
  },
  {
    id: 'lead-1002',
    name: 'Daniel Kim',
    contact: '(619) 555-0142',
    location: 'Del Mar, CA',
    projectType: 'Wallpaper removal',
    message:
      'Need old paper removed in dining room before repainting. Hoping for an estimate this weekend.',
    photoNames: ['dining-room.png', 'trim-detail.png'],
    status: 'Quote Sent',
    estimate: 540,
    notes: 'Quote emailed. Waiting for confirmation and preferred date.',
    createdAt: '2026-03-20T10:15:00.000Z',
    updatedAt: '2026-03-22T13:20:00.000Z',
  },
  {
    id: 'lead-1003',
    name: 'Sophia Martinez',
    contact: 'sophia.martinez@example.com',
    location: 'Coronado, CA',
    projectType: 'Multiple tasks',
    message:
      'Nursery wallpaper install plus touch-up painting in two adjacent rooms. Would love one coordinated schedule.',
    photoNames: [],
    status: 'Scheduled',
    estimate: 1450,
    notes: 'Scheduled for April 9. Client prefers a text reminder two days before.',
    createdAt: '2026-03-18T08:30:00.000Z',
    updatedAt: '2026-03-26T14:00:00.000Z',
  },
];

export const statusOptions = [
  'New',
  'Contacted',
  'Quote Sent',
  'Scheduled',
  'In Progress',
  'Completed',
  'Closed',
];

export const projectTypeOptions = [
  'Wallpaper installation',
  'Wallpaper removal',
  'Interior painting',
  'Multiple tasks',
  'Not sure yet',
];
