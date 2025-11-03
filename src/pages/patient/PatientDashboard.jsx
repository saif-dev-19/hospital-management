import React, { useEffect, useState } from "react";
import axios from "axios";

const PatientDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:5000/appointments?patientId=${user.id}`)
        .then((res) => setAppointments(res.data))
        .catch((err) => console.error(err));
    }
  }, [user]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🧍‍♂️ Patient Dashboard</h1>
      <h3>My Appointments</h3>
      <ul>
        {appointments.map((a) => (
          <li key={a.id}>
            Doctor #{a.doctorId} on {a.date} ({a.status})
          </li>
        ))}
      </ul>

      <button
        onClick={() => {
          localStorage.clear();
          window.location.href = "/";
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default PatientDashboard;
