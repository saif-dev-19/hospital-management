#!/usr/bin/env python
"""
Script to add specialties to the database
Run this in your backend directory: python add_specialties.py
"""

import os
import sys
import django

# Setup Django
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

try:
    django.setup()
    from authentication.models import Specialty
    
    print("=" * 60)
    print("🏥 Adding Medical Specialties to Database")
    print("=" * 60)
    print()
    
    specialties = [
        {"name": "Cardiology", "description": "Heart and cardiovascular system"},
        {"name": "Dermatology", "description": "Skin, hair, and nails"},
        {"name": "Neurology", "description": "Brain and nervous system"},
        {"name": "Pediatrics", "description": "Children's health"},
        {"name": "Orthopedics", "description": "Bones and joints"},
        {"name": "Psychiatry", "description": "Mental health"},
        {"name": "General Medicine", "description": "General health and wellness"},
        {"name": "Surgery", "description": "Surgical procedures"},
        {"name": "Gynecology", "description": "Women's health"},
        {"name": "Ophthalmology", "description": "Eye care"},
        {"name": "ENT", "description": "Ear, Nose, and Throat"},
        {"name": "Dentistry", "description": "Dental care"},
    ]
    
    created_count = 0
    existing_count = 0
    
    for spec_data in specialties:
        specialty, created = Specialty.objects.get_or_create(
            name=spec_data["name"],
            defaults={"description": spec_data["description"]}
        )
        
        if created:
            print(f"✅ Created: {specialty.name} (ID: {specialty.id})")
            created_count += 1
        else:
            print(f"ℹ️  Already exists: {specialty.name} (ID: {specialty.id})")
            existing_count += 1
    
    print()
    print("=" * 60)
    print(f"📊 Summary:")
    print(f"   - Created: {created_count}")
    print(f"   - Already existed: {existing_count}")
    print(f"   - Total specialties in database: {Specialty.objects.count()}")
    print("=" * 60)
    print()
    print("🎉 Done! You can now register doctors with specialties.")
    print()
    print("Available specialties:")
    for s in Specialty.objects.all():
        print(f"   ID {s.id}: {s.name}")
    
except ImportError as e:
    print("❌ Error: Could not import Django.")
    print("💡 Make sure you're running this from your backend directory.")
    print(f"   Error details: {e}")
    sys.exit(1)
except Exception as e:
    print(f"❌ Error: {e}")
    print("💡 Make sure Django is properly configured.")
    sys.exit(1)
