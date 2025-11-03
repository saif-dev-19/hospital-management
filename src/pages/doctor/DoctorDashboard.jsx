import React, { useEffect, useState } from "react";
import axios from "axios";

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:5000/appointments?doctorId=${user.id}`)
        .then((res) => setAppointments(res.data))
        .catch((err) => console.error(err));
    }
  }, [user]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>👩‍⚕️ Doctor Dashboard</h1>
      <h3>My Appointments</h3>
      <ul>
        {appointments.map((a) => (
          <li key={a.id}>
            Patient #{a.patientId} on {a.date} ({a.status})
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

export default DoctorDashboard;
