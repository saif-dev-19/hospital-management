# Backend Authentication Troubleshooting Guide

## 🔍 Issues Found

### Issue 1: Registration Works, Login Fails
**Symptom:** User can register successfully but cannot login with the same credentials.

**Possible Causes:**
1. Backend requires email verification before login
2. User account is not activated by default
3. Password hashing issue in backend
4. Login endpoint expects different credentials

### Issue 2: Backend Requirements
Based on testing, the backend requires:
- ✅ `username` field (minimum 3 characters)
- ✅ `email` field (valid email format)
- ✅ `password` field (minimum 8 characters)
- ✅ `password2` field (must match password)
- ✅ `role` field (patient, doctor, or admin)

## 🔧 Backend Fixes Needed

### 1. Check User Activation
In your Django backend, check if users are activated by default:

```python
# backend/authentication/serializers.py or views.py
# Ensure user.is_active = True when creating user

def create(self, validated_data):
    user = User.objects.create_user(
        username=validated_data['username'],
        email=validated_data['email'],
        password=validated_data['password'],
        role=validated_data.get('role', 'patient')
    )
    user.is_active = True  # ← Make sure this is set
    user.save()
    return user
```

### 2. Check Login View
Ensure the login view accepts email and password:

```python
# backend/authentication/views.py
class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        
        # Try to find user by email
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({'error': 'Invalid email or password'}, status=400)
        
        # Check if user is active
        if not user.is_active:
            return Response({'error': 'Account not activated'}, status=400)
        
        # Authenticate
        if user.check_password(password):
            # Generate tokens and return
            ...
        else:
            return Response({'error': 'Invalid email or password'}, status=400)
```

### 3. Verify CORS Settings
Ensure your backend allows requests from the frontend:

```python
# backend/settings.py
CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

CORS_ALLOW_CREDENTIALS = True
```

## 🧪 Testing Steps

### 1. Test Registration
```bash
curl -X POST http://localhost:8000/api/auth/register/ \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testpatient",
    "email": "patient@test.com",
    "password": "testpass123",
    "password2": "testpass123",
    "role": "patient"
  }'
```

**Expected Response:**
```json
{
  "user": {
    "id": 1,
    "username": "testpatient",
    "email": "patient@test.com",
    "role": "patient",
    "is_active": true
  },
  "tokens": {
    "access": "...",
    "refresh": "..."
  }
}
```

### 2. Test Login
```bash
curl -X POST http://localhost:8000/api/auth/login/ \
  -H "Content-Type: application/json" \
  -d '{
    "email": "patient@test.com",
    "password": "testpass123"
  }'
```

**Expected Response:**
```json
{
  "user": {
    "id": 1,
    "username": "testpatient",
    "email": "patient@test.com",
    "role": "patient"
  },
  "tokens": {
    "access": "...",
    "refresh": "..."
  }
}
```

### 3. Check Database
If login still fails, check the database directly:

```bash
# In Django shell
python manage.py shell

# Check user
from django.contrib.auth import get_user_model
User = get_user_model()
user = User.objects.get(email='patient@test.com')
print(f"Is Active: {user.is_active}")
print(f"Has Usable Password: {user.has_usable_password()}")

# Test password
print(f"Password Check: {user.check_password('testpass123')}")
```

## 🚀 Quick Fix for Backend

If you need a quick fix, update your login view to:

```python
from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        
        if not email or not password:
            return Response(
                {'error': 'Email and password are required'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Get user by email
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response(
                {'error': 'Invalid email or password'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Check if active
        if not user.is_active:
            return Response(
                {'error': 'Account is not active. Please contact admin.'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Verify password
        if not user.check_password(password):
            return Response(
                {'error': 'Invalid email or password'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Generate tokens
        from rest_framework_simplejwt.tokens import RefreshToken
        refresh = RefreshToken.for_user(user)
        
        return Response({
            'user': {
                'id': user.id,
                'username': user.username,
                'email': user.email,
                'role': user.role,
            },
            'tokens': {
                'access': str(refresh.access_token),
                'refresh': str(refresh),
            }
        }, status=status.HTTP_200_OK)
```

## 📝 Frontend Updates Made

The frontend has been updated to:
1. ✅ Send `password2` field during registration
2. ✅ Validate password length (minimum 8 characters)
3. ✅ Validate username length (minimum 3 characters)
4. ✅ Show better error messages
5. ✅ Handle network errors
6. ✅ Block admin role selection during registration

## 🎯 Next Steps

1. **Check Backend Logs**: Look at Django console when login fails
2. **Verify User in Database**: Ensure user exists and is_active=True
3. **Test Password**: Use Django shell to verify password works
4. **Update Login View**: Implement the fix above if needed
5. **Test Again**: Try registration and login from frontend

## 💡 Common Solutions

### Solution 1: Activate All Users
```python
# In Django shell
from django.contrib.auth import get_user_model
User = get_user_model()
User.objects.all().update(is_active=True)
```

### Solution 2: Reset User Password
```python
# In Django shell
from django.contrib.auth import get_user_model
User = get_user_model()
user = User.objects.get(email='patient@test.com')
user.set_password('testpass123')
user.is_active = True
user.save()
```

### Solution 3: Create Test Users via Admin
```bash
python manage.py createsuperuser
# Then login to admin panel and create test users
```
