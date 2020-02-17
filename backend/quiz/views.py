# not all imports are neccessary yet
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.http import HttpResponse
from .models import Quiz, QuizUserResult

# Create your views here.
from .serializers import QuestionSerializer, UserResultSerializer, AnswerSerializer


class QuizInfo(APIView):
    def get(self, request, quiz_id):
        quiz = Quiz.objects.get(id=quiz_id)
        return Response({
            'resource_id': quiz.resource_id,
            'questions': QuestionSerializer(quiz.get_quiz_questions(), many=True).data,
        })


class QuizLeaderboard(APIView):
    # ta stevlika predstavlja koliko najboljsih uporabnikov vrne
    leaderboard_limit = 10

    def get(self, request, quiz_id):
        results = QuizUserResult.objects.filter(quiz_id=quiz_id).order_by('-correct')[:self.leaderboard_limit]
        return Response({
            'quiz_id': quiz_id,
            'leaderboard': UserResultSerializer(results, many=True).data,
        })
