import React, { useEffect, useState } from 'react';
import { Grid, Typography, Box, Paper, List, ListItem, ListItemText, Chip, Button } from '@mui/material';
import { Event, People, Receipt, Message } from '@mui/icons-material';
import Layout from '../../components/Layout';
import DashboardCard from '../../components/DashboardCard';
import axios from 'axios';

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [patients, setPatients] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        try {
          const [appointmentsRes, patientsRes] = await Promise.all([
            axios.get(`http://localhost:5000/appointments?doctorId=${user.id}`),
            axios.get('http://localhost:5000/patients'),
          ]);
          setAppointments(appointmentsRes.data);
          setPatients(patientsRes.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }
  }, [user]);

  const todayAppointments = appointments.filter(app => {
    const today = new Date().toISOString().split('T')[0];
    return app.date === today;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'success';
      case 'pending': return 'warning';
      case 'cancelled': return 'error';
      default: return 'default';
    }
  };

  return (
    <Layout title="Doctor Dashboard" role="doctor">
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
          Welcome Dr. {user?.name || 'Doctor'}! Manage your patients and appointments.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <DashboardCard
              title="Today's Appointments"
              value={todayAppointments.length}
              icon={<Event />}
              color="primary"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <DashboardCard
              title="Total Patients"
              value={patients.length}
              icon={<People />}
              color="secondary"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <DashboardCard
              title="Pending Prescriptions"
              value="5" // Mock data
              icon={<Receipt />}
              color="success"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <DashboardCard
              title="Messages"
              value="3" // Mock data
              icon={<Message />}
              color="warning"
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: 400, overflow: 'auto' }}>
              <Typography variant="h6" gutterBottom>
                Today's Appointments
              </Typography>
              <List>
                {todayAppointments.length > 0 ? (
                  todayAppointments.map((appointment) => (
                    <ListItem key={appointment.id} divider>
                      <ListItemText
                        primary={`Patient ID: ${appointment.patientId}`}
                        secondary={`Time: ${appointment.time || 'TBD'} | Status: `}
                      />
                      <Chip
                        label={appointment.status}
                        color={getStatusColor(appointment.status)}
                        size="small"
                      />
                    </ListItem>
                  ))
                ) : (
                  <Typography variant="body2" color="text.secondary">
                    No appointments for today.
                  </Typography>
                )}
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: 400 }}>
              <Typography variant="h6" gutterBottom>
                Quick Actions
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Button variant="contained" color="primary">
                  View Patient Details
                </Button>
                <Button variant="contained" color="secondary">
                  Write Prescription
                </Button>
                <Button variant="outlined" color="primary">
                  Send Message
                </Button>
                <Button variant="outlined" color="secondary">
                  Update Appointment
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default DoctorDashboard;
