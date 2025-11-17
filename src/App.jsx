import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/admin/AdminDashboard";
import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import PatientDashboard from "./pages/patient/PatientDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

const RootRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");
    const token = localStorage.getItem("access_token");

    if (token && role) {
      if (role === "admin") {
        navigate("/admin/dashboard", { replace: true });
      } else if (role === "doctor") {
        navigate("/doctor/dashboard", { replace: true });
      } else if (role === "patient") {
        navigate("/patient/dashboard", { replace: true });
      }
    }
  }, [navigate]);

  return <Landing />;
};

function App() {
  const [role, setRole] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedRole = localStorage.getItem("role");
    const savedUser = localStorage.getItem("user");
    if (savedRole) setRole(savedRole);
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootRedirect />} />
        <Route path="/login" element={<Login setRole={setRole} setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
        
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminDashboard setRole={setRole} setUser={setUser} />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/doctor/*"
          element={
            <ProtectedRoute allowedRoles={["doctor"]}>
              <DoctorDashboard setRole={setRole} setUser={setUser} />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/patient/*"
          element={
            <ProtectedRoute allowedRoles={["patient"]}>
              <PatientDashboard setRole={setRole} setUser={setUser} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
