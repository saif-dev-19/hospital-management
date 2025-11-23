import API from './axios';

const authService = {
  // Register new user
  register: async (userData) => {
    try {
      const payload = {
        username: userData.username,
        email: userData.email,
        password: userData.password,
        password2: userData.password,
        first_name: userData.first_name || '',
        last_name: userData.last_name || '',
        phone: userData.phone || '',
        role: userData.role
      };

      // Add specialty only for doctors - backend expects 'specialty' not 'specialty_id'
      if (userData.role === 'doctor' && userData.specialty) {
        payload.specialty = Number(userData.specialty);
      }
      
      console.log("Final registration payload:", JSON.stringify(payload, null, 2));
      
      const response = await API.post('/auth/register/', payload);
      
      // Store tokens and user data
      if (response.data.tokens) {
        localStorage.setItem('access_token', response.data.tokens.access);
        localStorage.setItem('refresh_token', response.data.tokens.refresh);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('role', response.data.user.role);
      }
      
      return response.data;
    } catch (error) {
      if (error.response?.status === 0 || error.code === 'ERR_NETWORK') {
        throw { message: 'Cannot connect to server.' };
      }
      throw error.response?.data || error.message;
    }
  },

  // Login user
  login: async (email, password) => {
    try {
      const response = await API.post('/auth/login/', { email, password });
      
      // Store tokens and user data
      if (response.data.tokens) {
        localStorage.setItem('access_token', response.data.tokens.access);
        localStorage.setItem('refresh_token', response.data.tokens.refresh);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('role', response.data.user.role);
      }
      
      return response.data;
    } catch (error) {
      if (error.response?.status === 0 || error.code === 'ERR_NETWORK') {
        throw { detail: 'Cannot connect to server.' };
      }
      throw error.response?.data || error.message;
    }
  },

  // Logout user
  logout: async () => {
    try {
      const refreshToken = localStorage.getItem('refresh_token');
      await API.post('/auth/logout/', { refresh_token: refreshToken });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Clear local storage
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('user');
      localStorage.removeItem('role');
    }
  },

  // Get user profile
  getProfile: async () => {
    try {
      const response = await API.get('/auth/profile/');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Update user profile
  updateProfile: async (userData) => {
    try {
      const response = await API.put('/auth/profile/', userData);
      localStorage.setItem('user', JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Change password
  changePassword: async (oldPassword, newPassword) => {
    try {
      const response = await API.post('/auth/change-password/', {
        old_password: oldPassword,
        new_password: newPassword,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get doctor's appointments
  getDoctorAppointments: async () => {
    try {
      const response = await API.get('/appointments/doctor/');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get all appointments (admin)
  getAllAppointments: async () => {
    try {
      const response = await API.get('/appointments/');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get appointment detail
  getAppointmentDetail: async (id) => {
    try {
      const response = await API.get(`/appointments/${id}/`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Update appointment status (admin only)
  updateAppointmentStatus: async (id, status) => {
    try {
      const response = await API.patch(`/appointments/${id}/update-status/`, { status });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get specialties
  getSpecialties: async () => {
    try {
      const response = await API.get('/specialties/');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

export default authService;
