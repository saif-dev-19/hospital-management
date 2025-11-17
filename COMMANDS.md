# ⚡ Quick Commands Reference

All commands you need to run the Hospital Management System.

---

## 🎯 First Time Setup

### Backend Setup

\`\`\`bash
# Navigate to backend
cd backend

# Create virtual environment
python -m venv venv

# Activate (Windows)
venv\Scripts\activate

# Activate (Mac/Linux)
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Setup environment
python setup.py

# Run migrations
python manage.py makemigrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Start server
python manage.py runserver
\`\`\`

### Frontend Setup

\`\`\`bash
# Install dependencies
npm install

# Install axios
npm install axios

# Start dev server
npm run dev
\`\`\`

---

## 🚀 Daily Development

### Start Both Servers

**Terminal 1 - Backend:**
\`\`\`bash
cd backend
venv\Scripts\activate  # Windows
source venv/bin/activate  # Mac/Linux
python manage.py runserver
\`\`\`

**Terminal 2 - Frontend:**
\`\`\`bash
npm run dev
\`\`\`

---

## 🔧 Backend Commands

### Django Management

\`\`\`bash
# Activate virtual environment first!
cd backend
venv\Scripts\activate  # Windows
source venv/bin/activate  # Mac/Linux

# Run migrations
python manage.py makemigrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Start development server
python manage.py runserver

# Start on different port
python manage.py runserver 8001

# Run tests
python manage.py test

# Run specific test
python manage.py test accounts.tests.AuthenticationTestCase

# Django shell
python manage.py shell

# Create new app
python manage.py startapp appname

# Collect static files
python manage.py collectstatic

# Show migrations
python manage.py showmigrations

# Database shell
python manage.py dbshell
\`\`\`

### Database Management

\`\`\`bash
# Reset database
rm db.sqlite3  # Mac/Linux
del db.sqlite3  # Windows

# Delete migrations
rm accounts/migrations/0*.py  # Mac/Linux
del accounts\migrations\0*.py  # Windows

# Recreate database
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
\`\`\`

### Python Package Management

\`\`\`bash
# Install package
pip install package-name

# Install from requirements
pip install -r requirements.txt

# Update requirements
pip freeze > requirements.txt

# List installed packages
pip list

# Show package info
pip show package-name

# Uninstall package
pip uninstall package-name
\`\`\`

---

## 🎨 Frontend Commands

### Development

\`\`\`bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
\`\`\`

### Package Management

\`\`\`bash
# Install dependencies
npm install

# Install specific package
npm install package-name

# Install dev dependency
npm install -D package-name

# Uninstall package
npm uninstall package-name

# Update packages
npm update

# Check outdated packages
npm outdated

# Clean install
rm -rf node_modules package-lock.json  # Mac/Linux
rmdir /s node_modules & del package-lock.json  # Windows
npm install
\`\`\`

---

## 🧪 Testing Commands

### Backend Tests

\`\`\`bash
cd backend
venv\Scripts\activate  # Windows
source venv/bin/activate  # Mac/Linux

# Run all tests
python manage.py test

# Run specific app tests
python manage.py test accounts

# Run with verbosity
python manage.py test --verbosity=2

# Run specific test class
python manage.py test accounts.tests.AuthenticationTestCase

# Run specific test method
python manage.py test accounts.tests.AuthenticationTestCase.test_user_registration

# Keep test database
python manage.py test --keepdb
\`\`\`

### Frontend Tests

\`\`\`bash
# Build test
npm run build

# Check for errors
npm run lint
\`\`\`

---

## 🔍 Debugging Commands

### Backend Debugging

\`\`\`bash
# Django shell
python manage.py shell

# In shell:
from accounts.models import User
User.objects.all()
User.objects.filter(role='patient')
user = User.objects.get(email='test@example.com')
user.role
\`\`\`

### Check Logs

\`\`\`bash
# Backend logs (in terminal running Django)
# Watch for:
# - API requests
# - Errors
# - SQL queries (if DEBUG=True)

# Frontend logs (browser console)
# Press F12 in browser
# Check Console tab
\`\`\`

---

## 🌐 API Testing Commands

### Using curl

\`\`\`bash
# Register
curl -X POST http://localhost:8000/api/auth/register/ \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "email": "test@example.com",
    "password": "TestPass123!",
    "password2": "TestPass123!",
    "role": "patient"
  }'

# Login
curl -X POST http://localhost:8000/api/auth/login/ \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "TestPass123!"
  }'

# Get profile (replace TOKEN)
curl -X GET http://localhost:8000/api/auth/profile/ \
  -H "Authorization: Bearer TOKEN"
\`\`\`

### Using PowerShell

\`\`\`powershell
# Register
$body = @{
    username = "testuser"
    email = "test@example.com"
    password = "TestPass123!"
    password2 = "TestPass123!"
    role = "patient"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:8000/api/auth/register/" -Method Post -Body $body -ContentType "application/json"

# Login
$body = @{
    email = "test@example.com"
    password = "TestPass123!"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:8000/api/auth/login/" -Method Post -Body $body -ContentType "application/json"
\`\`\`

---

## 🔄 Git Commands

\`\`\`bash
# Initialize repository
git init

# Add files
git add .

# Commit
git commit -m "Initial commit"

# Add remote
git remote add origin <repository-url>

# Push
git push -u origin main

# Pull latest
git pull origin main

# Create branch
git checkout -b feature/new-feature

# Switch branch
git checkout main

# Merge branch
git merge feature/new-feature

# Check status
git status

# View log
git log --oneline
\`\`\`

---

## 🚀 Deployment Commands

### Frontend (Vercel)

\`\`\`bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
\`\`\`

### Backend (Heroku)

\`\`\`bash
# Install Heroku CLI
# Download from: https://devcenter.heroku.com/articles/heroku-cli

# Login
heroku login

# Create app
heroku create app-name

# Add PostgreSQL
heroku addons:create heroku-postgresql:hobby-dev

# Set environment variables
heroku config:set SECRET_KEY=your-secret-key
heroku config:set DEBUG=False

# Deploy
git push heroku main

# Run migrations
heroku run python manage.py migrate

# Create superuser
heroku run python manage.py createsuperuser

# View logs
heroku logs --tail
\`\`\`

---

## 🛠️ Maintenance Commands

### Update Dependencies

**Backend:**
\`\`\`bash
cd backend
venv\Scripts\activate
pip list --outdated
pip install --upgrade package-name
pip freeze > requirements.txt
\`\`\`

**Frontend:**
\`\`\`bash
npm outdated
npm update
npm install package-name@latest
\`\`\`

### Clean Up

**Backend:**
\`\`\`bash
# Remove Python cache
find . -type d -name __pycache__ -exec rm -r {} +  # Mac/Linux
for /d /r . %d in (__pycache__) do @if exist "%d" rd /s /q "%d"  # Windows

# Remove .pyc files
find . -name "*.pyc" -delete  # Mac/Linux
del /s *.pyc  # Windows
\`\`\`

**Frontend:**
\`\`\`bash
# Remove node_modules
rm -rf node_modules  # Mac/Linux
rmdir /s /q node_modules  # Windows

# Remove build
rm -rf dist  # Mac/Linux
rmdir /s /q dist  # Windows

# Clean install
npm ci
\`\`\`

---

## 📊 Monitoring Commands

### Check Running Processes

**Windows:**
\`\`\`bash
# Check port 8000
netstat -ano | findstr :8000

# Check port 5173
netstat -ano | findstr :5173

# Kill process by PID
taskkill /PID <PID> /F
\`\`\`

**Mac/Linux:**
\`\`\`bash
# Check port 8000
lsof -i :8000

# Check port 5173
lsof -i :5173

# Kill process by PID
kill -9 <PID>
\`\`\`

---

## 🎯 Quick Shortcuts

### One-Line Starters

**Backend:**
\`\`\`bash
cd backend && venv\Scripts\activate && python manage.py runserver
\`\`\`

**Frontend:**
\`\`\`bash
npm run dev
\`\`\`

### Full Reset

**Backend:**
\`\`\`bash
cd backend
rm db.sqlite3
rm accounts/migrations/0*.py
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
\`\`\`

**Frontend:**
\`\`\`bash
rm -rf node_modules package-lock.json
npm install
npm run dev
\`\`\`

---

## 📝 Notes

- Always activate virtual environment before running Django commands
- Keep both servers running during development
- Backend runs on port 8000, frontend on port 5173
- Check logs in terminal for errors
- Use browser DevTools (F12) for frontend debugging

---

**Quick Reference Complete! ⚡**

Bookmark this page for easy access to all commands.
