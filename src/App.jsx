import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/admin/AdminDashboard";
import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import PatientDashboard from "./pages/patient/PatientDashboard";
import NotAuthorized from "./pages/NotAuthorized";
import ProtectedRoute from "./components/ProtectedRoute";
import BookAppointment from "./pages/patient/BookAppointment"

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
        <Route path="/" element={<Login setRole={setRole} setUser={setUser} />} />
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute allowedRole="admin" currentRole={role}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/doctor-dashboard"
          element={
            <ProtectedRoute allowedRole="doctor" currentRole={role}>
              <DoctorDashboard />
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="/patient-dashboard/*"
          element={
            <ProtectedRoute allowedRole="patient" currentRole={role}>
              <PatientDashboard />
            </ProtectedRoute>
          }
        /> */}

      <Route
          path="/patient-dashboard/*"
          element={
            <ProtectedRoute allowedRole="patient" currentRole={role}>
              <PatientDashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<PatientDashboard />} />
          <Route path="book-appointment" element={<BookAppointment />} />
      </Route>
        <Route path="/not-authorized" element={<NotAuthorized />} />
      </Routes>
    </Router>
  );
}

export default App;
