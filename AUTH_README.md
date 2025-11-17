# 🔐 Authentication System - Complete Guide

## 📋 Overview

Full authentication system implemented with:
- ✅ User Registration (Patient & Doctor only)
- ✅ User Login with JWT tokens
- ✅ User Logout with token cleanup
- ✅ Role-based routing protection
- ✅ Auto-redirect after page refresh
- ✅ Persistent login sessions

## 🚀 Quick Start

### 1. Start Backend
```bash
cd backend
python manage.py runserver
```

### 2. Fix User Activation (One-time)
```bash
python manage.py shell
```
```python
from django.contrib.auth import get_user_model
User = get_user_model()
User.objects.all().update(is_active=True)
exit()
```

### 3. Start Frontend
```bash
npm run dev
```

### 4. Test Authentication
1. Go to http://localhost:5173/register
2. Register as Patient or Doctor
3. Login with your credentials
4. You'll be redirected to your dashboard!

## 📁 Files Modified

### Frontend Files
```
src/
├── api/
│   └── authService.js          ← Updated with password2 field
├── components/
│   └── ProtectedRoute.jsx      ← Enhanced role-based protection
├── pages/
│   ├── Login.jsx               ← Connected to backend API
│   ├── Register.jsx            ← Connected to backend API, admin blocked
│   ├── admin/
│   │   └── AdminDashboard.jsx  ← Added logout with authService
│   ├── doctor/
│   │   └── DoctorDashboard.jsx ← Added logout with authService
│   └── patient/
│       └── PatientDashboard.jsx← Added logout with authService
└── App.jsx                     ← Added auto-redirect logic
```

## 🔧 Key Features Implemented

### 1. Registration
**File:** `src/pages/Register.jsx`

**Features:**
- Only Patient and Doctor roles available
- Admin role blocked with error message
- Password validation (minimum 8 characters)
- Username validation (minimum 3 characters)
- Sends `password2` field to backend
- Auto-redirect to dashboard after success
- Detailed error messages

**API Call:**
```javascript
authService.register({
  username: "johndoe",
  email: "john@example.com",
  password: "password123",
  role: "patient"
})
```

### 2. Login
**File:** `src/pages/Login.jsx`

**Features:**
- Email and password authentication
- Role-based redirect (admin/doctor/patient)
- Loading states
- Error handling
- Network error detection

**API Call:**
```javascript
authService.login("john@example.com", "password123")
```

### 3. Logout
**Files:** All dashboard files

**Features:**
- Calls backend logout endpoint
- Clears all localStorage data
- Redirects to login page
- Available in all dashboards

**API Call:**
```javascript
authService.logout()
```

### 4. Protected Routes
**File:** `src/components/ProtectedRoute.jsx`

**Features:**
- Checks for valid token
- Verifies user role
- Redirects unauthorized users to their dashboard
- Redirects unauthenticated users to login

**Usage:**
```jsx
<ProtectedRoute allowedRoles={['admin']}>
  <AdminDashboard />
</ProtectedRoute>
```

### 5. Auto-Redirect
**File:** `src/App.jsx`

**Features:**
- Reads role from localStorage on load
- Keeps users logged in after refresh
- Auto-redirects from root to dashboard
- Maintains session state

## 🔐 Security Features

1. **JWT Token Authentication**
   - Access token for API requests
   - Refresh token for token renewal
   - Automatic token refresh on 401 errors

2. **Role-Based Access Control**
   - Admin can only access `/admin/*`
   - Doctor can only access `/doctor/*`
   - Patient can only access `/patient/*`

3. **Protected Routes**
   - Unauthenticated users redirected to login
   - Wrong role redirected to correct dashboard

4. **Secure Logout**
   - Backend API call to invalidate tokens
   - Complete localStorage cleanup
   - Forced redirect to login

## 📊 Data Flow

### Registration Flow
```
User fills form
    ↓
Validation (frontend)
    ↓
authService.register()
    ↓
POST /api/auth/register/
    ↓
Backend creates user + tokens
    ↓
Tokens saved to localStorage
    ↓
Redirect to dashboard
```

### Login Flow
```
User enters credentials
    ↓
authService.login()
    ↓
POST /api/auth/login/
    ↓
Backend verifies + returns tokens
    ↓
Tokens saved to localStorage
    ↓
Redirect based on role
```

### Protected Route Flow
```
User navigates to route
    ↓
ProtectedRoute checks token
    ↓
ProtectedRoute checks role
    ↓
If valid: Show page
If invalid: Redirect
```

## 🐛 Troubleshooting

### Issue: "Cannot connect to server"
**Solution:** Make sure backend is running on port 8000
```bash
python manage.py runserver
```

### Issue: "Invalid email or password" after registration
**Solution:** Activate users in Django
```bash
python manage.py shell
```
```python
from django.contrib.auth import get_user_model
User = get_user_model()
User.objects.all().update(is_active=True)
```

### Issue: "Password too short"
**Solution:** Use at least 8 characters for password

### Issue: CORS errors
**Solution:** Check Django CORS settings
```python
# backend/settings.py
CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
]
```

## 🧪 Testing Tools

### 1. Backend API Tester
Open `test-backend.html` in browser to:
- Test backend connection
- Register test users
- Test login functionality
- See detailed API responses

### 2. Manual Testing
Use curl commands from `BACKEND_TROUBLESHOOTING.md`

### 3. Django Shell
```bash
python manage.py shell
```
```python
from django.contrib.auth import get_user_model
User = get_user_model()

# List all users
for user in User.objects.all():
    print(f"{user.email} - Active: {user.is_active}")

# Test password
user = User.objects.get(email='test@test.com')
print(user.check_password('testpass123'))
```

## 📚 Additional Documentation

- **QUICK_FIX_GUIDE.md** - 2-minute fix for login issues
- **BACKEND_TROUBLESHOOTING.md** - Detailed backend debugging
- **AUTHENTICATION_FIX_SUMMARY.md** - Complete fix summary
- **test-backend.html** - Interactive API tester

## ✅ Validation Rules

### Registration
- Username: 3+ characters, required
- Email: Valid email format, required
- Password: 8+ characters, required
- Password Confirmation: Must match password
- Role: "patient" or "doctor" only

### Login
- Email: Required
- Password: Required

## 🎯 Current Status

| Feature | Status | Notes |
|---------|--------|-------|
| Registration UI | ✅ Working | Admin blocked |
| Registration API | ✅ Working | Creates user + tokens |
| Login UI | ✅ Working | Role-based redirect |
| Login API | ⚠️ Needs Fix | Backend user activation |
| Logout | ✅ Working | Full cleanup |
| Protected Routes | ✅ Working | Role-based access |
| Auto-redirect | ✅ Working | Persistent sessions |
| Token Refresh | ✅ Working | Automatic renewal |

## 🔄 Next Steps

1. **Fix Backend** - Activate users by default
2. **Test** - Register and login from frontend
3. **Deploy** - Update API URLs for production

## 💡 Tips

1. **Development:** Use `test-backend.html` to test API
2. **Debugging:** Check browser console and Django logs
3. **Testing:** Create test users with different roles
4. **Production:** Update `baseURL` in `axios.js`

## 🎉 Success Criteria

When everything works, you should be able to:
- ✅ Register as patient/doctor
- ✅ Login with credentials
- ✅ See role-specific dashboard
- ✅ Logout successfully
- ✅ Stay logged in after refresh
- ✅ Cannot access other role's pages

**Frontend is 100% ready! Just activate users in backend and you're good to go!**
