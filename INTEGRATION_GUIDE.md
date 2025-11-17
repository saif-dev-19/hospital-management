# 🔗 Frontend-Backend Integration Guide

Complete guide to integrate React frontend with Django backend.

## 🎯 Overview

This guide will help you connect the Hospital Management System React frontend with the Django REST API backend for authentication.

## 📋 Prerequisites

- ✅ React frontend running on http://localhost:5173
- ✅ Django backend running on http://localhost:8000
- ✅ Both servers running simultaneously

## 🚀 Step-by-Step Integration

### Step 1: Install Axios in Frontend

Navigate to the frontend directory and install axios:

\`\`\`bash
cd hospital-management
npm install axios
\`\`\`

### Step 2: Create API Configuration

Create a new file for API configuration:

\`\`\`bash
# Create api directory
mkdir src/api
\`\`\`

Create `src/api/axios.js`:

\`\`\`javascript
import axios from 'axios';

// Create axios instance with base URL
const API = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add token
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = \`Bearer \${token}\`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token refresh
API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If token expired, try to refresh
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem('refresh_token');
        const response = await axios.post(
          'http://localhost:8000/api/auth/token/refresh/',
          { refresh: refreshToken }
        );

        const { access } = response.data;
        localStorage.setItem('access_token', access);

        originalRequest.headers.Authorization = \`Bearer \${access}\`;
        return API(originalRequest);
      } catch (refreshError) {
        // Refresh failed, logout user
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('role');
        localStorage.removeItem('user');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default API;
\`\`\`

### Step 3: Create Auth Service

Create `src/api/authService.js`:

\`\`\`javascript
import API from './axios';

const authService = {
  // Register new user
  register: async (userData) => {
    try {
      const response = await API.post('/auth/register/', userData);
      
      // Store tokens and user data
      if (response.data.tokens) {
        localStorage.setItem('access_token', response.data.tokens.access);
        localStorage.setItem('refresh_token', response.data.tokens.refresh);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('role', response.data.user.role);
      }
      
      return response.data;
    } catch (error) {
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
\`\`\`

### Step 4: Update Login Component

Update `src/pages/Login.jsx`:

\`\`\`javascript
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHospital, FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import authService from "../api/authService";

const Login = ({ setRole, setUser }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await authService.login(formData.email, formData.password);
      
      // Update app state
      setRole(response.user.role);
      setUser(response.user);
      
      // Navigate to appropriate dashboard
      navigate(\`/\${response.user.role}/dashboard\`);
    } catch (err) {
      setError(err.error || "Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center p-4 relative overflow-hidden">
      {/* ... existing JSX ... */}
      
      <div className="w-full max-w-md relative z-10">
        {/* ... logo section ... */}

        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Sign In</h2>
          
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-xl">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          {/* Register Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <button
                onClick={() => navigate("/register")}
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <button
            onClick={() => navigate("/")}
            className="text-white hover:text-white/80 font-semibold"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
\`\`\`

### Step 5: Update Register Component

Update `src/pages/Register.jsx` similarly to use `authService.register()`.

### Step 6: Update Logout Functionality

In each dashboard component, update the logout handler:

\`\`\`javascript
import authService from "../../api/authService";

const handleLogout = async () => {
  await authService.logout();
  navigate("/login");
};
\`\`\`

## 🧪 Testing the Integration

### Test 1: Registration

1. Start both servers:
   - Frontend: `npm run dev` (port 5173)
   - Backend: `python manage.py runserver` (port 8000)

2. Navigate to http://localhost:5173/register

3. Fill in the registration form:
   - Username: testuser
   - Email: test@example.com
   - Password: TestPass123!
   - Role: patient

4. Click "Create Account"

5. You should be redirected to the patient dashboard

### Test 2: Login

1. Navigate to http://localhost:5173/login

2. Enter credentials:
   - Email: test@example.com
   - Password: TestPass123!

3. Click "Sign In"

4. You should be redirected to the appropriate dashboard

### Test 3: Logout

1. Click the "Logout" button in the sidebar

2. You should be redirected to the login page

3. Tokens should be cleared from localStorage

## 🔍 Debugging

### Check Browser Console

Open DevTools (F12) and check:
- Network tab for API requests
- Console tab for errors
- Application tab for localStorage

### Check Backend Logs

In the terminal running Django, you'll see:
\`\`\`
[17/Nov/2025 10:00:00] "POST /api/auth/login/ HTTP/1.1" 200 1234
\`\`\`

### Common Issues

**Issue 1: CORS Error**
\`\`\`
Access to XMLHttpRequest blocked by CORS policy
\`\`\`

**Solution:**
- Check backend `.env` has correct frontend URL
- Restart Django server after changing `.env`

**Issue 2: 401 Unauthorized**
\`\`\`
{"detail": "Authentication credentials were not provided."}
\`\`\`

**Solution:**
- Check token is being sent in Authorization header
- Check token hasn't expired

**Issue 3: Network Error**
\`\`\`
Network Error
\`\`\`

**Solution:**
- Ensure Django server is running
- Check the API URL is correct (http://localhost:8000)

## 📊 Testing with Postman

### 1. Register User

**POST** `http://localhost:8000/api/auth/register/`

Body (JSON):
\`\`\`json
{
  "username": "testuser",
  "email": "test@example.com",
  "password": "TestPass123!",
  "password2": "TestPass123!",
  "role": "patient"
}
\`\`\`

### 2. Login User

**POST** `http://localhost:8000/api/auth/login/`

Body (JSON):
\`\`\`json
{
  "email": "test@example.com",
  "password": "TestPass123!"
}
\`\`\`

Copy the `access` token from response.

### 3. Get Profile

**GET** `http://localhost:8000/api/auth/profile/`

Headers:
\`\`\`
Authorization: Bearer <your_access_token>
\`\`\`

## 🎯 Next Steps

After successful integration:

1. ✅ Test all three user roles (admin, doctor, patient)
2. ✅ Test token refresh mechanism
3. ✅ Test password change functionality
4. ✅ Add error handling for network failures
5. ✅ Add loading states for better UX
6. ✅ Implement "Remember Me" functionality
7. ✅ Add password reset feature

## 📝 Environment Variables

### Frontend (.env)

Create `.env` in frontend root:
\`\`\`env
VITE_API_URL=http://localhost:8000/api
\`\`\`

Update axios.js:
\`\`\`javascript
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api',
});
\`\`\`

### Backend (.env)

Already configured in `backend/.env`:
\`\`\`env
CORS_ALLOWED_ORIGINS=http://localhost:5173
\`\`\`

## 🚀 Production Deployment

### Frontend

Update API URL for production:
\`\`\`env
VITE_API_URL=https://your-backend-domain.com/api
\`\`\`

### Backend

Update CORS settings:
\`\`\`env
CORS_ALLOWED_ORIGINS=https://your-frontend-domain.com
\`\`\`

---

**Integration Complete! 🎉**

Your React frontend is now connected to the Django backend with full authentication support.
