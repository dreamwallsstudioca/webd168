import { Route, Routes } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { demoLeads } from "./data/demoLeads";

const STORAGE_KEY = "dreamwalls-crm-leads-v1";

export default function App() {
  const [leads, setLeads] = useLocalStorage(STORAGE_KEY, demoLeads);

  return (
    <div className="app-shell">
      <SiteHeader />
      <Routes>
        <Route
          path="/"
          element={<HomePage leads={leads} setLeads={setLeads} />}
        />
        <Route
          path="/dashboard"
          element={<DashboardPage leads={leads} setLeads={setLeads} />}
        />
      </Routes>
    </div>
  );
}
