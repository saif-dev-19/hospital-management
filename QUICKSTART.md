# 🚀 Quick Start Guide

## Installation & Setup

### 1. Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 2. Start Development Server
\`\`\`bash
npm run dev
\`\`\`

The application will open at `http://localhost:5173`

## 🎯 How to Use

### Step 1: Visit Landing Page
- Open `http://localhost:5173` in your browser
- You'll see a beautiful landing page with:
  - Hero section with animated cards
  - Features showcase
  - Call-to-action buttons

### Step 2: Register or Login
Click "Get Started" or "Login" button:

**Login Page** (`/login`)
- Select your role: Admin, Doctor, or Patient
- Enter any email and password
- Click "Sign In"

**Register Page** (`/register`)
- Fill in your details
- Select your role
- Create account

### Step 3: Explore Dashboards

#### 🔵 Admin Dashboard (`/admin/dashboard`)
**Color Theme**: Indigo & Purple

**Available Pages**:
- **Dashboard** - Overview with stats and charts
- **Doctors** - Manage all doctors (add, view, edit)
- **Patients** - Complete patient database
- **Appointments** - Schedule and manage appointments
- **Billing** - Invoice management and payments
- **Notifications** - System notifications
- **Settings** - Profile and system settings

#### 🟢 Doctor Dashboard (`/doctor/dashboard`)
**Color Theme**: Teal & Cyan

**Available Pages**:
- **Dashboard** - Today's schedule and patient overview
- **Appointments** - Manage your appointments
- **My Patients** - View assigned patients
- **Medical Records** - Access patient records
- **Notifications** - Personal notifications
- **Settings** - Profile settings

#### 🔴 Patient Dashboard (`/patient/dashboard`)
**Color Theme**: Rose & Pink

**Available Pages**:
- **Dashboard** - Health overview
- **Book Appointment** - Multi-step booking wizard
- **My Appointments** - View and manage appointments
- **Find Doctors** - Browse available doctors
- **Medical Records** - Access medical history
- **Notifications** - Health updates
- **Profile** - Personal and medical information

## 🎨 Features to Try

### 1. Book an Appointment (Patient)
1. Login as Patient
2. Click "Book Appointment" in sidebar
3. Follow the 3-step wizard:
   - Select specialty and type
   - Choose doctor
   - Pick date and time
4. Confirm booking

### 2. Manage Doctors (Admin)
1. Login as Admin
2. Go to "Doctors" page
3. Browse doctor cards
4. Use search and filters
5. Click "Add Doctor" to add new

### 3. View Medical Records (Doctor)
1. Login as Doctor
2. Go to "Medical Records"
3. Browse patient records
4. Download or view details

## 🎯 Test Credentials

You can use ANY email and password combination. The system uses role-based authentication:

**Example Logins**:
- Admin: `admin@hospital.com` / `password`
- Doctor: `doctor@hospital.com` / `password`
- Patient: `patient@hospital.com` / `password`

## 📱 Responsive Testing

Test on different screen sizes:
- Desktop: Full sidebar and grid layouts
- Tablet: Responsive grids
- Mobile: Collapsible sidebar

## 🎨 UI Features to Notice

### Animations
- Hover effects on cards
- Smooth transitions
- Floating animations on landing page
- Active state indicators

### Color Schemes
- Each dashboard has unique gradient colors
- Consistent design language
- Professional color combinations

### Components
- Modern sidebar navigation
- Beautiful card designs
- Gradient buttons
- Glass-morphism effects
- Status badges
- Search and filter bars

## 🛠️ Development Commands

\`\`\`bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
\`\`\`

## 📁 Key Files to Explore

\`\`\`
src/
├── pages/
│   ├── Landing.jsx          # Landing page
│   ├── Login.jsx            # Login page
│   ├── Register.jsx         # Registration page
│   ├── admin/               # Admin dashboard pages
│   ├── doctor/              # Doctor dashboard pages
│   └── patient/             # Patient dashboard pages
├── components/
│   └── ProtectedRoute.jsx   # Route protection
├── App.jsx                  # Main app with routing
└── index.css                # Global styles
\`\`\`

## 🎯 What to Test

✅ Landing page animations
✅ Login with different roles
✅ Sidebar navigation
✅ Page transitions
✅ Responsive design
✅ Search and filters
✅ Form submissions
✅ Multi-step booking
✅ Card hover effects
✅ Status indicators

## 🚀 Next Steps

1. **Customize Colors**: Edit gradient classes in dashboard components
2. **Add Backend**: Connect to API for real data
3. **Add Database**: Store user and appointment data
4. **Add Authentication**: Implement real auth system
5. **Add More Features**: Extend functionality as needed

## 💡 Tips

- Use browser DevTools to test responsive design
- Check console for any errors
- Explore all pages in each dashboard
- Try the multi-step appointment booking
- Test search and filter functionality

## 🎉 Enjoy!

You now have a fully functional Hospital Management System UI with:
- ✅ 3 unique dashboards
- ✅ 20+ pages
- ✅ Modern UI/UX
- ✅ Responsive design
- ✅ Beautiful animations
- ✅ Professional color schemes

Happy coding! 🚀
