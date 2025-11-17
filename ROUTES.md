# 🗺️ Application Routes

## Public Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Landing | Beautiful landing page with hero section |
| `/login` | Login | Role-based login page |
| `/register` | Register | User registration page |

## Admin Routes (`/admin/*`)
**Theme**: Indigo & Purple Gradient

| Route | Component | Description |
|-------|-----------|-------------|
| `/admin/dashboard` | Dashboard | Overview with stats, appointments, top doctors |
| `/admin/doctors` | Doctors | Doctor management with search and filters |
| `/admin/patients` | Patients | Patient database with detailed table |
| `/admin/appointments` | Appointments | Appointment scheduling and management |
| `/admin/billing` | Billing | Invoice management and payment tracking |
| `/admin/notifications` | Notifications | System-wide notifications |
| `/admin/settings` | Settings | Profile, security, and system settings |

## Doctor Routes (`/doctor/*`)
**Theme**: Teal & Cyan Gradient

| Route | Component | Description |
|-------|-----------|-------------|
| `/doctor/dashboard` | Dashboard | Today's schedule and patient overview |
| `/doctor/appointments` | Appointments | Personal appointment management |
| `/doctor/patients` | Patients | Assigned patients list |
| `/doctor/records` | MedicalRecords | Patient medical records access |
| `/doctor/notifications` | Notifications | Personal notifications |
| `/doctor/settings` | Settings | Profile and preferences |

## Patient Routes (`/patient/*`)
**Theme**: Rose & Pink Gradient

| Route | Component | Description |
|-------|-----------|-------------|
| `/patient/dashboard` | Dashboard | Health overview and upcoming appointments |
| `/patient/book-appointment` | BookAppointment | Multi-step appointment booking wizard |
| `/patient/appointments` | MyAppointments | View and manage appointments |
| `/patient/doctors` | Doctors | Browse and find doctors |
| `/patient/records` | MedicalRecords | Personal medical history |
| `/patient/notifications` | Notifications | Health updates and reminders |
| `/patient/profile` | Profile | Personal and medical information |

## Route Protection

All dashboard routes are protected by `ProtectedRoute` component:
- Checks if user is logged in
- Verifies user role matches required role
- Redirects to `/login` if unauthorized

## Navigation Flow

\`\`\`
Landing (/)
    ↓
Login (/login) or Register (/register)
    ↓
Select Role: Admin | Doctor | Patient
    ↓
    ├─→ Admin Dashboard (/admin/dashboard)
    │       ├─→ Doctors (/admin/doctors)
    │       ├─→ Patients (/admin/patients)
    │       ├─→ Appointments (/admin/appointments)
    │       ├─→ Billing (/admin/billing)
    │       ├─→ Notifications (/admin/notifications)
    │       └─→ Settings (/admin/settings)
    │
    ├─→ Doctor Dashboard (/doctor/dashboard)
    │       ├─→ Appointments (/doctor/appointments)
    │       ├─→ Patients (/doctor/patients)
    │       ├─→ Medical Records (/doctor/records)
    │       ├─→ Notifications (/doctor/notifications)
    │       └─→ Settings (/doctor/settings)
    │
    └─→ Patient Dashboard (/patient/dashboard)
            ├─→ Book Appointment (/patient/book-appointment)
            ├─→ My Appointments (/patient/appointments)
            ├─→ Find Doctors (/patient/doctors)
            ├─→ Medical Records (/patient/records)
            ├─→ Notifications (/patient/notifications)
            └─→ Profile (/patient/profile)
\`\`\`

## Sidebar Navigation

Each dashboard has a collapsible sidebar with:
- Logo and title
- Menu items with icons
- Active state highlighting
- Logout button

### Admin Sidebar Icons
- 🏠 Dashboard
- 👨‍⚕️ Doctors
- 👥 Patients
- 📅 Appointments
- 💰 Billing
- 🔔 Notifications
- ⚙️ Settings

### Doctor Sidebar Icons
- 🏠 Dashboard
- 📅 Appointments
- 👥 My Patients
- 📋 Medical Records
- 🔔 Notifications
- ⚙️ Settings

### Patient Sidebar Icons
- 🏠 Dashboard
- ➕ Book Appointment
- 📅 My Appointments
- 👨‍⚕️ Find Doctors
- 📋 Medical Records
- 🔔 Notifications
- 👤 Profile

## Default Routes

- Accessing `/admin` redirects to `/admin/dashboard`
- Accessing `/doctor` redirects to `/doctor/dashboard`
- Accessing `/patient` redirects to `/patient/dashboard`
- Any unknown route within dashboard redirects to respective dashboard

## Authentication State

Stored in `localStorage`:
- `role`: User role (admin/doctor/patient)
- `user`: User object with name, email, role

## Logout Flow

1. Click logout button in sidebar
2. Clear `localStorage`
3. Redirect to `/login`

---

**Total Routes**: 24 routes across 3 dashboards + 3 public routes = **27 routes**
