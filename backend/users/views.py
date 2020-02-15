# not all imports are neccessary yet
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from .models import Profile, ProfileStatistics
from django.contrib.auth import authenticate, login
from django.http import HttpResponse


# Create your views here.
class test(APIView):
    def get(self, request):
        return (Response([user.username for user in User.objects.all()]))


class userinfo(APIView):
    def get(self, request, user):
        user = User.objects.get(username=user)
        return Response(user.profilestatistics.stats())
