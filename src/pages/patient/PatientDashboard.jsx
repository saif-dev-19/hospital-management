import React, { useEffect, useState } from 'react';
import { Grid, Typography, Box, Paper, List, ListItem, ListItemText, Chip, Button, Card, CardContent } from '@mui/material';
import { Event, History, Receipt, Message, Add } from '@mui/icons-material';
import Layout from '../../components/Layout';
import DashboardCard from '../../components/DashboardCard';
import axios from 'axios';

const PatientDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [medicalHistory, setMedicalHistory] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        try {
          const [appointmentsRes] = await Promise.all([
            axios.get(`http://localhost:5000/appointments?patientId=${user.id}`),
          ]);
          setAppointments(appointmentsRes.data);
          // Mock medical history
          setMedicalHistory([
            { id: 1, date: '2023-10-01', diagnosis: 'Common Cold', doctor: 'Dr. Smith' },
            { id: 2, date: '2023-09-15', diagnosis: 'Check-up', doctor: 'Dr. Johnson' },
          ]);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }
  }, [user]);

  const upcomingAppointments = appointments.filter(app => new Date(app.date) >= new Date());
  const pastAppointments = appointments.filter(app => new Date(app.date) < new Date());

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'success';
      case 'pending': return 'warning';
      case 'cancelled': return 'error';
      default: return 'default';
    }
  };

  return (
    <Layout title="Patient Dashboard" role="patient">
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
          Welcome {user?.name || 'Patient'}! Manage your health records.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <DashboardCard
              title="Upcoming Appointments"
              value={upcomingAppointments.length}
              icon={<Event />}
              color="primary"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <DashboardCard
              title="Medical Records"
              value={medicalHistory.length}
              icon={<History />}
              color="secondary"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <DashboardCard
              title="Prescriptions"
              value="3" // Mock data
              icon={<Receipt />}
              color="success"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <DashboardCard
              title="Messages"
              value="2" // Mock data
              icon={<Message />}
              color="warning"
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: 400, overflow: 'auto' }}>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h6">
                  Upcoming Appointments
                </Typography>
                <Button variant="contained" startIcon={<Add />} size="small">
                  Book New
                </Button>
              </Box>
              <List>
                {upcomingAppointments.length > 0 ? (
                  upcomingAppointments.map((appointment) => (
                    <ListItem key={appointment.id} divider>
                      <ListItemText
                        primary={`Doctor ID: ${appointment.doctorId}`}
                        secondary={`Date: ${appointment.date} | Time: ${appointment.time || 'TBD'}`}
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
                    No upcoming appointments.
                  </Typography>
                )}
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: 400, overflow: 'auto' }}>
              <Typography variant="h6" gutterBottom>
                Recent Medical History
              </Typography>
              <List>
                {medicalHistory.map((record) => (
                  <ListItem key={record.id} divider>
                    <ListItemText
                      primary={record.diagnosis}
                      secondary={`Date: ${record.date} | Doctor: ${record.doctor}`}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Quick Actions
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button variant="contained" color="primary" startIcon={<Add />}>
                    Book Appointment
                  </Button>
                  <Button variant="outlined" color="primary" startIcon={<History />}>
                    View Full History
                  </Button>
                  <Button variant="outlined" color="secondary" startIcon={<Receipt />}>
                    Download Prescriptions
                  </Button>
                  <Button variant="outlined" color="success" startIcon={<Message />}>
                    Contact Doctor
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default PatientDashboard;
