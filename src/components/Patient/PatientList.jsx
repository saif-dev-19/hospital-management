import React, { useEffect, useState } from "react";
import { getPatients, deletePatient } from "../../api/patientApi";

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    getPatients().then(res => setPatients(res.data));
  }, []);

  const handleDelete = (id) => {
    deletePatient(id).then(() => setPatients(patients.filter(p => p.id !== id)));
  };

  return (
    <div>
      <h2>Patients</h2>
      <ul>
        {patients.map(p => (
          <li key={p.id}>
            {p.name} - {p.diagnosis} 
            <button onClick={() => handleDelete(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
