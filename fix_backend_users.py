#!/usr/bin/env python
"""
Quick script to activate all users in Django backend
Run this in your backend directory: python fix_backend_users.py
"""

import os
import sys
import django

# Setup Django
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

try:
    django.setup()
    from django.contrib.auth import get_user_model
    
    User = get_user_model()
    
    print("=" * 50)
    print("🔧 Fixing Backend User Activation")
    print("=" * 50)
    print()
    
    # Get all users
    users = User.objects.all()
    
    if not users.exists():
        print("❌ No users found in database.")
        print("💡 Register a user from the frontend first, then run this script.")
        sys.exit(0)
    
    print(f"Found {users.count()} user(s):")
    print()
    
    # Show current status
    for user in users:
        status = "✅ Active" if user.is_active else "❌ Inactive"
        print(f"  {user.email} - {status}")
    
    print()
    
    # Activate all users
    inactive_count = users.filter(is_active=False).count()
    
    if inactive_count == 0:
        print("✅ All users are already active!")
    else:
        print(f"Activating {inactive_count} inactive user(s)...")
        User.objects.filter(is_active=False).update(is_active=True)
        print("✅ All users activated successfully!")
    
    print()
    print("=" * 50)
    print("🎉 Done! You can now login from the frontend.")
    print("=" * 50)
    
except ImportError as e:
    print("❌ Error: Could not import Django.")
    print("💡 Make sure you're running this from your backend directory.")
    print(f"   Error details: {e}")
    sys.exit(1)
except Exception as e:
    print(f"❌ Error: {e}")
    print("💡 Make sure Django is properly configured.")
    sys.exit(1)
