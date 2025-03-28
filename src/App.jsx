import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "@/Components/Sidebar/Sidebar";
import Dashboard from "@/Components/Dashboard/Dashboard";
import Profile from "@/Components/Profile/Profile";
import Settings from "@/Components/Settings/Settings";
import Employes from "./Screens/Employee/Employes";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4 text-gray-300">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/employee" element={<Employes />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
