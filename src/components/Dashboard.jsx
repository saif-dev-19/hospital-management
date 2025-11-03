import React, { useEffect, useState } from "react";
import { getPatients } from "../api/patientApi";
import { getDoctors } from "../api/doctorApi";
import { getAppointments } from "../api/appointmentApi";

const Dashboard = () => {
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    getPatients().then(res => setPatients(res.data));
    getDoctors().then(res => setDoctors(res.data));
    getAppointments().then(res => setAppointments(res.data));
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Total Patients: {patients.length}</p>
      <p>Total Doctors: {doctors.length}</p>
      <p>Total Appointments: {appointments.length}</p>
    </div>
  );
};

export default Dashboard;
