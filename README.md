# Hospital Management System 🏥

A modern, full-featured Hospital Management System built with React, Tailwind CSS, and React Router. Features three distinct user dashboards with beautiful UI/UX.

## ✨ Features

### 🎨 Modern UI/UX
- **Stunning Landing Page** with hero section, features, and call-to-action
- **Beautiful Auth Pages** with gradient backgrounds and glass effects
- **Three Unique Dashboards** with distinct color schemes and layouts
- **Responsive Design** that works on all devices
- **Smooth Animations** and transitions throughout

### 👥 Three User Roles

#### 1. Admin Dashboard (Indigo/Purple Theme)
- **Dashboard** - Overview with stats, recent appointments, top doctors
- **Doctors Management** - View, add, and manage doctors
- **Patients Management** - Complete patient database
- **Appointments** - Schedule and manage all appointments
- **Billing** - Invoice management and payment tracking
- **Notifications** - System-wide notifications
- **Settings** - Profile, security, and system preferences

#### 2. Doctor Dashboard (Teal/Cyan Theme)
- **Dashboard** - Today's schedule and patient overview
- **Appointments** - Manage personal appointments
- **My Patients** - View assigned patients
- **Medical Records** - Access patient records
- **Notifications** - Personal notifications
- **Settings** - Profile and preferences

#### 3. Patient Dashboard (Rose/Pink Theme)
- **Dashboard** - Health overview and upcoming appointments
- **Book Appointment** - Multi-step booking process
- **My Appointments** - View and manage appointments
- **Find Doctors** - Browse available doctors
- **Medical Records** - Access personal medical history
- **Notifications** - Health updates and reminders
- **Profile** - Personal and medical information

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
\`\`\`bash
git clone <repository-url>
cd hospital-management
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Start the development server
\`\`\`bash
npm run dev
\`\`\`

4. Open your browser and navigate to `http://localhost:5173`

## 🎯 Usage

### Login Credentials
The system uses role-based authentication. You can login as:

- **Admin**: Select "admin" role and use any email/password
- **Doctor**: Select "doctor" role and use any email/password
- **Patient**: Select "patient" role and use any email/password

### Navigation

#### Landing Page (`/`)
- Beautiful hero section with animated cards
- Features showcase
- Call-to-action buttons

#### Authentication
- **Login** (`/login`) - Role-based login with modern UI
- **Register** (`/register`) - User registration with validation

#### Dashboards
- **Admin** - `/admin/dashboard` and sub-routes
- **Doctor** - `/doctor/dashboard` and sub-routes
- **Patient** - `/patient/dashboard` and sub-routes

## 🎨 Design Features

### Color Schemes
- **Admin**: Indigo (#4F46E5) to Purple (#9333EA)
- **Doctor**: Teal (#14B8A6) to Cyan (#06B6D4)
- **Patient**: Rose (#F43F5E) to Pink (#EC4899)

### UI Components
- Gradient backgrounds
- Glass-morphism effects
- Smooth hover animations
- Modern card designs
- Responsive grid layouts
- Dynamic sidebars with active states
- Beautiful form inputs
- Status badges and indicators

## 📁 Project Structure

\`\`\`
hospital-management/
├── src/
│   ├── components/
│   │   └── ProtectedRoute.jsx
│   ├── pages/
│   │   ├── admin/
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Doctors.jsx
│   │   │   ├── Patients.jsx
│   │   │   ├── Appointments.jsx
│   │   │   ├── Billing.jsx
│   │   │   ├── Notifications.jsx
│   │   │   └── Settings.jsx
│   │   ├── doctor/
│   │   │   ├── DoctorDashboard.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Appointments.jsx
│   │   │   ├── Patients.jsx
│   │   │   ├── MedicalRecords.jsx
│   │   │   ├── Notifications.jsx
│   │   │   └── Settings.jsx
│   │   ├── patient/
│   │   │   ├── PatientDashboard.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── BookAppointment.jsx
│   │   │   ├── MyAppointments.jsx
│   │   │   ├── Doctors.jsx
│   │   │   ├── MedicalRecords.jsx
│   │   │   ├── Notifications.jsx
│   │   │   └── Profile.jsx
│   │   ├── Landing.jsx
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── README.md
\`\`\`

## 🛠️ Technologies Used

- **React 19** - UI library
- **React Router DOM 7** - Routing
- **Tailwind CSS 4** - Styling
- **React Icons** - Icon library
- **Vite** - Build tool

## 🎭 Key Features Implemented

✅ Three distinct user dashboards with unique designs
✅ Modern sidebar navigation with active states
✅ Responsive layouts for all screen sizes
✅ Beautiful landing page with animations
✅ Premium auth pages with gradient backgrounds
✅ Role-based routing and authentication
✅ Dynamic color schemes per dashboard
✅ Smooth transitions and hover effects
✅ Professional card components
✅ Grid-based layouts
✅ Form validation and multi-step forms
✅ Status indicators and badges
✅ Search and filter functionality
✅ Placeholder data for visual demonstration

## 📱 Responsive Design

The application is fully responsive and works seamlessly on:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎨 Customization

### Changing Colors
Edit the gradient classes in each dashboard component:
- Admin: `from-indigo-600 to-purple-600`
- Doctor: `from-teal-600 to-cyan-600`
- Patient: `from-rose-600 to-pink-600`

### Adding New Pages
1. Create component in appropriate folder
2. Add route in dashboard component
3. Add menu item to sidebar

## 🚀 Build for Production

\`\`\`bash
npm run build
\`\`\`

The build output will be in the `dist` folder.

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

Built with ❤️ for modern healthcare management

---

**Note**: This is a UI demonstration project with placeholder data. For production use, integrate with a backend API and database.
