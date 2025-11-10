import React, { useEffect, useState } from 'react';
import { Grid, Typography, Box, Paper } from '@mui/material';
import { People, Event, Receipt, Assessment } from '@mui/icons-material';
import Layout from '../../components/Layout';
import DashboardCard from '../../components/DashboardCard';
import axios from 'axios';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    doctors: 0,
    patients: 0,
    appointments: 0,
    revenue: 0,
  });

  useEffect(() => {
    // Fetch stats from API
    const fetchStats = async () => {
      try {
        const [doctorsRes, patientsRes, appointmentsRes] = await Promise.all([
          axios.get('http://localhost:5000/doctors'),
          axios.get('http://localhost:5000/patients'),
          axios.get('http://localhost:5000/appointments'),
        ]);
        setStats({
          doctors: doctorsRes.data.length,
          patients: patientsRes.data.length,
          appointments: appointmentsRes.data.length,
          revenue: 50000,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };
    fetchStats();
  }, []);

  return (
    <Layout title="Admin Dashboard" role="admin">
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
          Welcome Admin! Manage your hospital efficiently.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <DashboardCard
              title="Total Doctors"
              value={stats.doctors}
              icon={<People />}
              color="black"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <DashboardCard
              title="Total Patients"
              value={stats.patients}
              icon={<People />}
              color="secondary"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <DashboardCard
              title="Appointments"
              value={stats.appointments}
              icon={<Event />}
              color="success"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <DashboardCard
              title="Revenue"
              value={`$${stats.revenue}`}
              icon={<Receipt />}
              color="warning"
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: 300 }}>
              <Typography variant="h6" gutterBottom>
                Recent Appointments
              </Typography>
              {/* Add appointment list or chart here */}
              <Typography variant="body2" color="text.secondary">
                Appointment management features coming soon...
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: 300 }}>
              <Typography variant="h6" gutterBottom>
                Department Overview
              </Typography>
              {/* Add department chart here */}
              <Typography variant="body2" color="text.secondary">
                Department analytics coming soon...
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default AdminDashboard;
