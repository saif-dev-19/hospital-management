import React, { useState } from "react";
import { addPatient } from "../../api/patientApi";

const PatientForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [diagnosis, setDiagnosis] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPatient = { name, age: Number(age), gender, diagnosis };
    addPatient(newPatient).then(res => {
      onAdd(res.data);
      setName(""); setAge(""); setGender(""); setDiagnosis("");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
      <input placeholder="Age" value={age} onChange={e => setAge(e.target.value)} type="number" required />
      <input placeholder="Gender" value={gender} onChange={e => setGender(e.target.value)} required />
      <input placeholder="Diagnosis" value={diagnosis} onChange={e => setDiagnosis(e.target.value)} required />
      <button type="submit">Add Patient</button>
    </form>
  );
};

export default PatientForm;
