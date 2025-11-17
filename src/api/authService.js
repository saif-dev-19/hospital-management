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
        role: userData.role
      };
      
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
        throw { message: 'Cannot connect to server. Please ensure the backend is running on http://localhost:8000' };
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
        throw { detail: 'Cannot connect to server. Please ensure the backend is running on http://localhost:8000' };
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
};

export default authService;
