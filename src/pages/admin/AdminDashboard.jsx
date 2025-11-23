import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { FaHome, FaUserMd, FaUsers, FaCalendarAlt, FaFileInvoiceDollar, FaCog, FaBell, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import authService from "../../api/authService";
import Dashboard from "./Dashboard";
import Doctors from "./Doctors";
import Patients from "./Patients";
import Appointments from "./Appointments";
import AppointmentDetails from "./AppointmentDetails";
import Billing from "./Billing";
import Settings from "./Settings";
import Notifications from "./Notifications";

const AdminDashboard = ({ setRole, setUser }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { path: "/admin/dashboard", icon: <FaHome />, label: "Dashboard" },
    { path: "/admin/doctors", icon: <FaUserMd />, label: "Doctors" },
    { path: "/admin/patients", icon: <FaUsers />, label: "Patients" },
    { path: "/admin/appointments", icon: <FaCalendarAlt />, label: "Appointments" },
    { path: "/admin/billing", icon: <FaFileInvoiceDollar />, label: "Billing" },
    { path: "/admin/notifications", icon: <FaBell />, label: "Notifications" },
    { path: "/admin/settings", icon: <FaCog />, label: "Settings" },
  ];

  const handleLogout = async () => {
    await authService.logout();
    setRole(null);
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? "w-64" : "w-20"} bg-gradient-to-b from-indigo-600 to-purple-700 text-white transition-all duration-300 flex flex-col shadow-2xl`}>
        {/* Header */}
        <div className="p-6 flex items-center justify-between border-b border-white/20">
          {sidebarOpen && <h1 className="text-2xl font-bold">Admin Panel</h1>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white hover:bg-white/20 p-2 rounded-lg">
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition transform hover:scale-105 ${
                location.pathname === item.path
                  ? "bg-white text-indigo-600 shadow-lg"
                  : "hover:bg-white/10"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {sidebarOpen && <span className="font-semibold">{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-white/20">
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-red-500 transition"
          >
            <FaSignOutAlt className="text-xl" />
            {sidebarOpen && <span className="font-semibold">Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="patients" element={<Patients />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="appointments/:id" element={<AppointmentDetails />} />
          <Route path="billing" element={<Billing />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
