from django.contrib import admin

# Register your models here.
from .models import Profile, ProfileStatistics

admin.site.register(Profile)
admin.site.register(ProfileStatistics)
