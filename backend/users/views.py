# not all imports are neccessary yet
from rest_framework.exceptions import NotFound
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from .models import Profile, ProfileStatistics
from django.contrib.auth import authenticate, login
from django.http import HttpResponse

from quiz.models import *


class Users(APIView):
    def get(self, request):

        users = User.objects.all()

        return Response({
            'user_count': users.count(),
            'users': [
                {
                    'id': user.id,
                    'username': user.username
                } for user in users
            ]
        })


class UserInfo(APIView):
    def get(self, request, username):
        if not User.objects.filter(username=username).exists():
            raise NotFound(detail="Requested User not found.", code=404)

        # User exists, let's return the data
        user = User.objects.get(username=username)
        profile = Profile.objects.get(user__username=username)
        user_statistics = ProfileStatistics.objects.get(user__profile=profile)

        quizzes_rated = 0
        for quiz_stats in QuizStatistics.objects.all():
            if user in quiz_stats.upvoters.all() or user in quiz_stats.downvoters.all():
                quizzes_rated += 1

        return Response({
            'id': user.id,
            'username': user.username,
            'profile':
            {
                        'description': profile.description,
                        },
                'stats':
                    {
                        # TODO: nimamo se model-a ki bi keep-al resource-e ki jih uporabnik prebere, je to sploh pomembno?
                        'resources_read': 0,
                        'quizzes_played': QuizUserResult.objects.filter(user=user).count(),
                        'quizzes_rated': quizzes_rated,
                        'rating': user_statistics.rating,
            }
        })


class UserLeaderboard(APIView):
    # ta stevlika predstavlja koliko najboljsih uporabnikov vrne
    LEADERBOARD_LIMIT = 10

    def get(self, request):
        stats = ProfileStatistics.objects.all().order_by(
            "-rating")[:self.LEADERBOARD_LIMIT]

        return Response({
            'users': [
                {
                    'id': stat.user.id,
                    'username': stat.user.username,
                    'rating': ProfileStatistics.objects.get(user=stat.user).rating,
                } for stat in stats
            ]
        })
