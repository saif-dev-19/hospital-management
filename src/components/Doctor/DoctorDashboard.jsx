import React, { useEffect, useState } from "react";
import axios from "axios";

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/appointments?doctorId=1")
      .then(res => setAppointments(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>👩‍⚕️ Doctor Dashboard</h1>
      <h3>My Appointments</h3>
      <ul>
        {appointments.map(a => (
          <li key={a.id}>Patient #{a.patientId} on {a.date} ({a.status})</li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorDashboard;
