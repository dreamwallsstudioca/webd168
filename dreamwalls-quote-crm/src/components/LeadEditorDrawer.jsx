import { useEffect, useState } from 'react';
import { projectTypeOptions, statusOptions } from '../data/demoLeads';

function makeEmptyLead() {
  return {
    id: '',
    name: '',
    contact: '',
    location: '',
    projectType: 'Wallpaper installation',
    message: '',
    photoNames: [],
    status: 'New',
    estimate: '',
    notes: '',
    createdAt: '',
    updatedAt: '',
  };
}

export default function LeadEditorDrawer({ lead, isOpen, onClose, onSave }) {
  const [formData, setFormData] = useState(makeEmptyLead());
  const isEditing = Boolean(lead?.id);

  useEffect(() => {
    if (lead) {
      setFormData({ ...lead, photoNames: lead.photoNames || [] });
    } else {
      setFormData(makeEmptyLead());
    }
  }, [lead]);

  if (!isOpen) {
    return null;
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  function handlePhotoNamesChange(event) {
    const value = event.target.value;
    const photoNames = value
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);

    setFormData((current) => ({ ...current, photoNames }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSave({
      ...formData,
      estimate: formData.estimate ? Number(formData.estimate) : '',
    });
  }

  return (
    <div className="drawer-backdrop" role="presentation" onClick={onClose}>
      <aside
        className="editor-drawer"
        aria-label={isEditing ? 'Edit lead' : 'Create lead'}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="editor-drawer__head">
          <div>
            <p className="crm-kicker">Lead editor</p>
            <h2>{isEditing ? 'Update Lead Record' : 'Create New Lead'}</h2>
          </div>
          <button type="button" className="editor-drawer__close" onClick={onClose}>
            ×
          </button>
        </div>

        <form className="editor-form" onSubmit={handleSubmit}>
          <label>
            <span>Name</span>
            <input name="name" value={formData.name} onChange={handleChange} required />
          </label>

          <label>
            <span>Phone or Email</span>
            <input name="contact" value={formData.contact} onChange={handleChange} required />
          </label>

          <label>
            <span>Location</span>
            <input name="location" value={formData.location} onChange={handleChange} />
          </label>

          <label>
            <span>Project Type</span>
            <select name="projectType" value={formData.projectType} onChange={handleChange}>
              {projectTypeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span>Status</span>
            <select name="status" value={formData.status} onChange={handleChange}>
              {statusOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span>Estimate</span>
            <input
              type="number"
              min="0"
              name="estimate"
              value={formData.estimate}
              onChange={handleChange}
            />
          </label>

          <label className="editor-form__full">
            <span>Photo file names (comma separated)</span>
            <input
              value={formData.photoNames.join(', ')}
              onChange={handlePhotoNamesChange}
              placeholder="entry-wall.jpg, powder-room.jpg"
            />
          </label>

          <label className="editor-form__full">
            <span>Project message</span>
            <textarea name="message" rows="4" value={formData.message} onChange={handleChange} />
          </label>

          <label className="editor-form__full">
            <span>Internal notes</span>
            <textarea name="notes" rows="4" value={formData.notes} onChange={handleChange} />
          </label>

          <div className="editor-form__actions">
            <button type="button" className="button-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">{isEditing ? 'Save Changes' : 'Create Lead'}</button>
          </div>
        </form>
      </aside>
    </div>
  );
}
