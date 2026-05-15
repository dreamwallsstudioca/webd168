import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { projectTypeOptions } from "../data/demoLeads";

const initialFormState = {
  name: "",
  contact: "",
  location: "",
  projectType: "",
  message: "",
  estimate: "",
  notes: "",
  status: "New",
  photoNames: [],
};

export default function QuoteFormCard({ onCreateLead }) {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const fileSummary = useMemo(() => {
    if (!formData.photoNames.length) {
      return "No photos selected yet.";
    }

    return formData.photoNames.join(", ");
  }, [formData.photoNames]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  function handleFileChange(event) {
    const photoNames = Array.from(event.target.files || []).map(
      (file) => file.name,
    );
    setFormData((current) => ({ ...current, photoNames }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    onCreateLead({
      ...formData,
      estimate: formData.estimate ? Number(formData.estimate) : "",
    });

    setIsSubmitted(true);
    setFormData(initialFormState);

    setTimeout(() => {
      navigate("/dashboard");
    }, 500);
  }

  return (
    <section
      className="quote-bg"
      id="quote-form"
      aria-label="Get a Quote section"
    >
      <div className="quote-split quote-split--crm">
        <div className="quote-media quote-media--crm" aria-hidden="true">
          <div className="quote-media__card">
            <span className="quote-media__eyebrow">Signature aesthetic</span>
            <h3>
              Luxury wallpaper projects start with a beautifully organized lead.
            </h3>
            <p>
              Keep the editorial Dream Walls Studio look, while turning every
              inquiry into an actionable CRM record.
            </p>
            <ul className="quote-media__list">
              <li>Collect project details</li>
              <li>Track lead status</li>
              <li>Add pricing and notes</li>
              <li>Review everything inside the dashboard</li>
            </ul>
          </div>
        </div>

        <div className="quote-shell quote-shell--crm">
          <div className="quote-head">
            <h2>Let’s Talk About Your Project</h2>
            <div className="quote-divider" aria-hidden="true" />
            <p>
              Submit the form exactly like a client would. Every submission is
              saved into the local CRM and can be edited later.
            </p>
          </div>

          <form className="quote-form" onSubmit={handleSubmit}>
            <div className="q-grid">
              <label className="q-field">
                <span className="q-label">Name</span>
                <input
                  className="q-input"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className="q-field">
                <span className="q-label">Phone or Email</span>
                <input
                  className="q-input"
                  type="text"
                  name="contact"
                  placeholder="Your Phone or Email"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className="q-field">
                <span className="q-label">Project Location (City or ZIP)</span>
                <input
                  className="q-input"
                  type="text"
                  name="location"
                  placeholder="City or ZIP Code"
                  value={formData.location}
                  onChange={handleChange}
                />
              </label>

              <label className="q-field">
                <span className="q-label">Type of Project</span>
                <select
                  className="q-input"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select a Project Type
                  </option>
                  {projectTypeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="q-grid q-grid--secondary">
              <label className="q-field">
                <span className="q-label">Estimated Quote (optional)</span>
                <input
                  className="q-input"
                  type="number"
                  min="0"
                  name="estimate"
                  placeholder="850"
                  value={formData.estimate}
                  onChange={handleChange}
                />
              </label>

              <label className="q-field">
                <span className="q-label">Internal Notes (optional)</span>
                <input
                  className="q-input"
                  type="text"
                  name="notes"
                  placeholder="Any reminders or admin notes"
                  value={formData.notes}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="q-upload">
              <div className="q-upload-title">
                Upload Photos of Your Walls or Room
              </div>

              <label className="q-upload-box" htmlFor="quotePhotos">
                <div className="q-upload-icon">📷</div>
                <div className="q-upload-btn">Choose Photos</div>
                <div className="q-upload-hint">
                  For this class version, photo file names are stored in the CRM
                  record to keep the app fast and reliable in localStorage.
                </div>
              </label>

              <input
                id="quotePhotos"
                className="q-file"
                type="file"
                name="photos"
                accept="image/*"
                multiple
                onChange={handleFileChange}
              />
              <div className="q-files" aria-live="polite">
                {fileSummary}
              </div>
            </div>

            <label className="q-field q-field--textarea">
              <span className="q-label">Message / Project Details</span>
              <textarea
                className="q-textarea"
                name="message"
                rows="5"
                placeholder="Example: Bedroom accent wall. Wallpaper link or material details if available."
                value={formData.message}
                onChange={handleChange}
              />
            </label>

            <button className="q-submit" type="submit">
              Save Quote to CRM
            </button>

            <div className="q-note">
              {isSubmitted
                ? "Saved successfully — redirecting to CRM dashboard..."
                : "This demo stores leads in localStorage so they remain after refresh on the same browser."}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
