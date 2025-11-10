import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Paper,
  Grid,
  Alert,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const BookAppointment = () => {
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [successMsg, setSuccessMsg] = useState("");

  // Fetch patients and doctors from local json-server
  useEffect(() => {
    fetch("http://localhost:5000/patients")
      .then((res) => res.json())
      .then((data) => setPatients(data));

    fetch("http://localhost:5000/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  const handleSubmit = () => {
    if (!selectedPatient || !selectedDoctor || !selectedDate) {
      alert("Please select patient, doctor and date!");
      return;
    }

    const appointmentData = {
      patientId: selectedPatient,
      doctorId: selectedDoctor,
      date: dayjs(selectedDate).format("YYYY-MM-DD"),
      status: "booked",
    };

    fetch("http://localhost:5000/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(appointmentData),
    })
      .then((res) => res.json())
      .then(() => {
        setSuccessMsg("Appointment booked successfully!");
        setSelectedPatient("");
        setSelectedDoctor("");
        setSelectedDate(null);
      });
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: "auto",
        mt: 5,
        p: 4,
        backgroundColor: "#f5f5f5",
        borderRadius: 3,
        boxShadow: 3,
      }}
    >
      <Typography variant="h4" sx={{ mb: 3, color: "#1976d2", fontWeight: "bold" }}>
        Book Appointment
      </Typography>

      {successMsg && (
        <Alert
          severity="success"
          sx={{ mb: 2 }}
          onClose={() => setSuccessMsg("")}
        >
          {successMsg}
        </Alert>
      )}

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            select
            fullWidth
            label="Select Patient"
            value={selectedPatient}
            onChange={(e) => setSelectedPatient(Number(e.target.value))}
          >
            {patients.map((p) => (
              <MenuItem key={p.id} value={p.id}>
                {p.name} ({p.age} yrs)
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12}>
          <TextField
            select
            fullWidth
            label="Select Doctor"
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(Number(e.target.value))}
          >
            {doctors.map((d) => (
              <MenuItem key={d.id} value={d.id}>
                {d.name} - {d.specialization}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Select Date"
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
              disablePast
              renderInput={(params) => <TextField fullWidth {...params} />}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
            sx={{
              py: 1.5,
              fontWeight: "bold",
              fontSize: 16,
              background: "linear-gradient(90deg, #1976d2, #42a5f5)",
              "&:hover": { background: "linear-gradient(90deg, #1565c0, #1e88e5)" },
            }}
          >
            Book Appointment
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BookAppointment;
