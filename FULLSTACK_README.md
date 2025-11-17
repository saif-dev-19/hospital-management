# 🏥 Hospital Management System - Full Stack

Complete Hospital Management System with React Frontend and Django Backend with JWT Authentication.

## 📊 Project Overview

A modern, full-featured hospital management system with:
- **Frontend**: React 19 + Tailwind CSS + React Router
- **Backend**: Django 5.0 + Django REST Framework + JWT Authentication
- **Features**: Role-based dashboards (Admin, Doctor, Patient) with complete authentication

---

## 🎯 Features

### Frontend Features
- ✅ Beautiful landing page with animations
- ✅ Modern authentication pages (Login/Register)
- ✅ Three unique dashboards with distinct designs
- ✅ 27 pages across all dashboards
- ✅ Responsive design for all devices
- ✅ Smooth animations and transitions
- ✅ Professional color schemes

### Backend Features
- ✅ User registration with validation
- ✅ User login with JWT tokens
- ✅ Token refresh mechanism
- ✅ User logout with token blacklisting
- ✅ Role-based access control
- ✅ User profile management
- ✅ Password change functionality
- ✅ CORS enabled for React frontend

---

## 🚀 Quick Start

### Prerequisites
- Node.js 14+ and npm
- Python 3.8+ and pip
- Git (optional)

### 1. Clone Repository

\`\`\`bash
git clone <repository-url>
cd hospital-management
\`\`\`

### 2. Setup Backend

\`\`\`bash
# Navigate to backend
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
python setup.py

# Run migrations
python manage.py makemigrations
python manage.py migrate

# Create superuser (optional)
python manage.py createsuperuser

# Start backend server
python manage.py runserver
\`\`\`

Backend will run on: **http://localhost:8000**

### 3. Setup Frontend

Open a new terminal:

\`\`\`bash
# Navigate to frontend (project root)
cd hospital-management

# Install dependencies
npm install

# Install axios for API calls
npm install axios

# Start frontend server
npm run dev
\`\`\`

Frontend will run on: **http://localhost:5173**

### 4. Access the Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8000/api/auth/
- **Admin Panel**: http://localhost:8000/admin/

---

## 📁 Project Structure

\`\`\`
hospital-management/
├── backend/                          # Django Backend
│   ├── hospital_backend/            # Django project
│   │   ├── settings.py              # Settings
│   │   ├── urls.py                  # URL routing
│   │   └── ...
│   ├── accounts/                    # Authentication app
│   │   ├── models.py                # User model
│   │   ├── serializers.py           # API serializers
│   │   ├── views.py                 # API views
│   │   ├── urls.py                  # App URLs
│   │   └── ...
│   ├── manage.py                    # Django management
│   ├── requirements.txt             # Python dependencies
│   ├── .env.example                 # Environment template
│   ├── README.md                    # Backend docs
│   └── SETUP_GUIDE.md              # Setup instructions
│
├── src/                             # React Frontend
│   ├── api/                         # API services
│   │   ├── axios.js                 # Axios configuration
│   │   └── authService.js           # Auth API calls
│   ├── components/                  # Reusable components
│   │   └── ProtectedRoute.jsx      # Route protection
│   ├── pages/                       # All pages
│   │   ├── admin/                   # Admin dashboard
│   │   ├── doctor/                  # Doctor dashboard
│   │   ├── patient/                 # Patient dashboard
│   │   ├── Landing.jsx              # Landing page
│   │   ├── Login.jsx                # Login page
│   │   └── Register.jsx             # Register page
│   ├── App.jsx                      # Main app
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Global styles
│
├── public/                          # Static assets
├── package.json                     # Frontend dependencies
├── README.md                        # Main documentation
├── INTEGRATION_GUIDE.md            # Integration guide
└── FULLSTACK_README.md             # This file
\`\`\`

---

## 🔐 Authentication Flow

### Registration
1. User fills registration form
2. Frontend sends POST to `/api/auth/register/`
3. Backend creates user and returns JWT tokens
4. Frontend stores tokens in localStorage
5. User redirected to appropriate dashboard

### Login
1. User enters email and password
2. Frontend sends POST to `/api/auth/login/`
3. Backend validates credentials and returns JWT tokens
4. Frontend stores tokens in localStorage
5. User redirected to dashboard based on role

### Logout
1. User clicks logout button
2. Frontend sends POST to `/api/auth/logout/` with refresh token
3. Backend blacklists the refresh token
4. Frontend clears localStorage
5. User redirected to login page

### Token Refresh
1. Access token expires (1 hour)
2. API request fails with 401
3. Axios interceptor catches error
4. Sends refresh token to `/api/auth/token/refresh/`
5. Gets new access token
6. Retries original request

---

## 🎨 User Roles & Dashboards

### Admin Dashboard (Indigo/Purple)
**Access**: `/admin/dashboard`

**Pages**:
- Dashboard - Overview with stats
- Doctors - Manage doctors
- Patients - Manage patients
- Appointments - Schedule management
- Billing - Invoice tracking
- Notifications - System alerts
- Settings - Configuration

### Doctor Dashboard (Teal/Cyan)
**Access**: `/doctor/dashboard`

**Pages**:
- Dashboard - Today's schedule
- Appointments - Personal appointments
- Patients - Assigned patients
- Medical Records - Patient records
- Notifications - Personal alerts
- Settings - Profile settings

### Patient Dashboard (Rose/Pink)
**Access**: `/patient/dashboard`

**Pages**:
- Dashboard - Health overview
- Book Appointment - 3-step wizard
- My Appointments - Appointment history
- Find Doctors - Doctor directory
- Medical Records - Personal records
- Notifications - Health updates
- Profile - Personal information

---

## 🔧 API Endpoints

### Base URL: `http://localhost:8000/api/auth/`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/register/` | Register new user | No |
| POST | `/login/` | Login user | No |
| POST | `/logout/` | Logout user | Yes |
| POST | `/token/refresh/` | Refresh access token | No |
| GET | `/profile/` | Get user profile | Yes |
| PUT | `/profile/` | Update user profile | Yes |
| POST | `/change-password/` | Change password | Yes |

---

## 🧪 Testing

### Test Backend

\`\`\`bash
cd backend
python manage.py test accounts
\`\`\`

### Test Frontend

\`\`\`bash
npm run build
\`\`\`

### Manual Testing

1. **Register a new user**:
   - Go to http://localhost:5173/register
   - Fill in the form
   - Select role (admin/doctor/patient)
   - Submit

2. **Login**:
   - Go to http://localhost:5173/login
   - Enter credentials
   - Should redirect to dashboard

3. **Test Dashboard**:
   - Navigate through sidebar menu
   - Check all pages load correctly
   - Test responsive design

4. **Logout**:
   - Click logout button
   - Should redirect to login
   - Try accessing dashboard (should redirect to login)

---

## 🐛 Troubleshooting

### Frontend Issues

**Issue**: Cannot connect to backend
\`\`\`
Network Error
\`\`\`

**Solution**:
- Ensure backend is running on port 8000
- Check `src/api/axios.js` has correct baseURL
- Check browser console for CORS errors

**Issue**: Token expired
\`\`\`
401 Unauthorized
\`\`\`

**Solution**:
- Token refresh should happen automatically
- If not, logout and login again
- Check axios interceptors are working

### Backend Issues

**Issue**: CORS errors
\`\`\`
Access to XMLHttpRequest blocked by CORS policy
\`\`\`

**Solution**:
- Check `backend/.env` has correct frontend URL
- Restart Django server after changing `.env`
- Verify `django-cors-headers` is installed

**Issue**: Module not found
\`\`\`
ModuleNotFoundError: No module named 'rest_framework'
\`\`\`

**Solution**:
- Activate virtual environment
- Run `pip install -r requirements.txt`

---

## 📚 Documentation

- **README.md** - Main project documentation
- **backend/README.md** - Backend API documentation
- **backend/SETUP_GUIDE.md** - Backend setup guide
- **INTEGRATION_GUIDE.md** - Frontend-Backend integration
- **QUICKSTART.md** - Quick start guide
- **ROUTES.md** - All routes documentation
- **FEATURES.md** - Features checklist
- **DEPLOYMENT.md** - Deployment guide

---

## 🚀 Deployment

### Frontend Deployment (Vercel)

\`\`\`bash
npm run build
vercel --prod
\`\`\`

Update API URL in production:
\`\`\`env
VITE_API_URL=https://your-backend-url.com/api
\`\`\`

### Backend Deployment (Heroku/Railway)

1. Update settings for production
2. Set environment variables
3. Use PostgreSQL instead of SQLite
4. Configure static files
5. Update CORS settings

---

## 🔒 Security Considerations

### Production Checklist

- [ ] Set `DEBUG=False` in Django
- [ ] Use strong `SECRET_KEY`
- [ ] Use HTTPS for all requests
- [ ] Set proper `ALLOWED_HOSTS`
- [ ] Configure CORS properly
- [ ] Use environment variables
- [ ] Enable CSRF protection
- [ ] Use secure password hashing
- [ ] Implement rate limiting
- [ ] Add input validation

---

## 📊 Tech Stack

### Frontend
- React 19
- React Router DOM 7
- Tailwind CSS 3.4
- Axios
- React Icons
- Vite

### Backend
- Django 5.0
- Django REST Framework 3.14
- Simple JWT 5.3
- Django CORS Headers 4.3
- Python Decouple 3.8
- SQLite (dev) / PostgreSQL (prod)

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 📝 License

This project is open source and available under the MIT License.

---

## 👨‍💻 Development Team

Built with ❤️ for modern healthcare management

---

## 🎉 Status

**Frontend**: ✅ Complete (27 pages, 3 dashboards)
**Backend**: ✅ Complete (JWT auth, user management)
**Integration**: ✅ Complete (API services, auth flow)
**Documentation**: ✅ Complete (8 documentation files)

---

## 📞 Support

For issues or questions:
1. Check documentation files
2. Review error messages
3. Check browser/server console
4. Test with Postman/Thunder Client

---

**Full Stack Application Ready! 🚀**

Both frontend and backend are complete and ready to use. Follow the Quick Start guide to get started.
