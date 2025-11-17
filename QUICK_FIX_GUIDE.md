# ⚡ Quick Fix Guide - Get Authentication Working in 2 Minutes

## 🎯 The Issue
- ✅ Registration works
- ❌ Login fails with "Invalid email or password"
- **Cause:** Backend not activating users by default

## 🔧 Quick Fix (Choose One)

### Option A: Activate Existing Users (Fastest)

1. Open terminal in your backend directory
2. Run:
```bash
python manage.py shell
```

3. Paste this:
```python
from django.contrib.auth import get_user_model
User = get_user_model()
User.objects.all().update(is_active=True)
print("All users activated!")
exit()
```

4. Done! Try logging in now ✅

### Option B: Fix Registration Code

Edit your backend registration file (usually `backend/authentication/serializers.py` or `views.py`):

Find the `create` method and add `user.is_active = True`:

```python
def create(self, validated_data):
    user = User.objects.create_user(
        username=validated_data['username'],
        email=validated_data['email'],
        password=validated_data['password'],
        role=validated_data.get('role', 'patient')
    )
    user.is_active = True  # ← ADD THIS LINE
    user.save()
    return user
```

## 🧪 Test It

### Method 1: Use the Test Tool
1. Open `test-backend.html` in your browser
2. Click "Test Connection"
3. Register a new user
4. Try logging in
5. If it works, your frontend will work too!

### Method 2: Test from Frontend
1. Make sure backend is running: `python manage.py runserver`
2. Start frontend: `npm run dev`
3. Go to http://localhost:5173/register
4. Register with:
   - Username: testuser
   - Email: test@test.com
   - Password: testpass123 (minimum 8 characters!)
   - Role: Patient
5. Try logging in with the same credentials

## ✅ Verification Checklist

- [ ] Backend running on http://localhost:8000
- [ ] Frontend running on http://localhost:5173
- [ ] Users activated (Option A or B above)
- [ ] Password is at least 8 characters
- [ ] CORS enabled in Django settings

## 🚨 Still Not Working?

### Check 1: Is Backend Running?
```bash
curl http://localhost:8000/api/auth/register/
```
Should return something (not "connection refused")

### Check 2: Check User in Database
```bash
python manage.py shell
```
```python
from django.contrib.auth import get_user_model
User = get_user_model()
user = User.objects.get(email='test@test.com')
print(f"Active: {user.is_active}")
print(f"Password works: {user.check_password('testpass123')}")
```

### Check 3: Check Django Logs
Look at the terminal where Django is running. You should see:
```
POST /api/auth/login/ HTTP/1.1" 200
```
Not:
```
POST /api/auth/login/ HTTP/1.1" 400
```

## 📚 More Help

- **Detailed troubleshooting:** See `BACKEND_TROUBLESHOOTING.md`
- **Complete fix summary:** See `AUTHENTICATION_FIX_SUMMARY.md`
- **Test tool:** Open `test-backend.html` in browser

## 💡 Common Mistakes

1. **Password too short** - Must be 8+ characters
2. **Backend not running** - Run `python manage.py runserver`
3. **Wrong port** - Backend must be on port 8000
4. **CORS not enabled** - Check Django CORS settings
5. **User not active** - Run Option A above

## 🎉 Success!

Once you activate users, everything will work:
- ✅ Register → Auto-login → Dashboard
- ✅ Login → Dashboard
- ✅ Logout → Login page
- ✅ Protected routes
- ✅ Role-based access
- ✅ Stay logged in after refresh

**The frontend is 100% ready. Just fix the backend user activation!**
