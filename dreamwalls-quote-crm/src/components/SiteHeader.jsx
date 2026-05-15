import { NavLink } from 'react-router-dom';

export default function SiteHeader() {
  return (
    <header className="topbar crm-topbar">
      <div className="topbar-inner crm-topbar__inner">
        <NavLink className="brand brand--lg" to="/" aria-label="Dream Walls Studio Home">
          <strong>Dream Walls Studio</strong>
        </NavLink>

        <nav className="nav crm-nav" aria-label="Primary navigation">
          <NavLink to="/">Quote Page</NavLink>
          <NavLink to="/dashboard">CRM Dashboard</NavLink>
        </nav>
      </div>
    </header>
  );
}
