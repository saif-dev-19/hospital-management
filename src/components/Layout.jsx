import React from 'react';
import { Box, CssBaseline, Drawer, AppBar, Toolbar, List, Typography, Divider, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Menu as MenuIcon, Dashboard, People, Event, Receipt, Assessment, Logout } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const Layout = ({ children, title, role }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const menuItems = {
    admin: [
      { text: 'Dashboard', icon: <Dashboard />, path: '/admin-dashboard' },
      { text: 'Doctors', icon: <People />, path: '/admin-dashboard' },
      { text: 'Patients', icon: <People />, path: '/admin-dashboard' },
      { text: 'Appointments', icon: <Event />, path: '/admin-dashboard' },
      { text: 'Departments', icon: <Assessment />, path: '/admin-dashboard' },
      { text: 'Billing', icon: <Receipt />, path: '/admin-dashboard' },
      { text: 'Reports', icon: <Assessment />, path: '/admin-dashboard' },
    ],
    doctor: [
      { text: 'Dashboard', icon: <Dashboard />, path: '/doctor-dashboard' },
      { text: 'Appointments', icon: <Event />, path: '/doctor-dashboard' },
      { text: 'Patients', icon: <People />, path: '/doctor-dashboard' },
      { text: 'Prescriptions', icon: <Receipt />, path: '/doctor-dashboard' },
      { text: 'Messages', icon: <Assessment />, path: '/doctor-dashboard' },
    ],
    patient: [
      { text: 'Dashboard', icon: <Dashboard />, path: '/patient-dashboard' },
      { text: 'Book Appointment', icon: <Event />, path: '/patient-dashboard/book-appointment'},
      { text: 'Medical History', icon: <Assessment />, path: '/patient-dashboard' },
      { text: 'Prescriptions', icon: <Receipt />, path: '/patient-dashboard' },
      { text: 'Messages', icon: <People />, path: '/patient-dashboard' },
    ],
  };

  const drawer = (
    <div>
      <Toolbar>
        <Typography variant="h5" noWrap component="div">
          Hospital Management
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {menuItems[role]?.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleLogout}>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
