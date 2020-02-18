# not all imports are neccessary yet
from rest_framework.exceptions import NotFound
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.http import HttpResponse
from .models import *


class QuizInfo(APIView):
    def get(self, request, quiz_id):
        if not Quiz.objects.filter(id=quiz_id).exists():
            raise NotFound(detail="Requested Quiz not found.", code=404)

        # Quiz exists, let's return the data.
        quiz = Quiz.objects.get(id=quiz_id)

        return Response({
            'quiz_id': quiz.pk,
            'material_id': quiz.material_id,
            'questions': [
                {
                    'question': question.text,
                    'correct': question.correct,
                    'answers': [
                        answer.text for answer in QuizAnswer.objects.filter(question=question)
                    ]
                } for question in QuizQuestion.objects.filter(quiz_id=quiz.id)
            ],
        })


class QuizStatistics(APIView):
    def get(self, request, quiz_id):
        if not Quiz.objects.filter(id=quiz_id).exists():
            raise NotFound(detail="Requested Quiz not found.", code=404)

        # Quiz exists, let's return the data.
        quiz = Quiz.objects.get(id=quiz_id)
        statistics = quiz.stats

        return Response({
            'quiz_id': quiz.id,
            'material_id': quiz.material_id,
            'statistics':
                {
                    'upvotes': statistics.upvoters.count(),
                    'downvotes': statistics.downvoters.count(),
                    'views': statistics.views,
                    'upvoters': [
                        user.id for user in statistics.upvoters.all()
                    ],
                    'downvoters': [
                        user.id for user in statistics.downvoters.all()
                    ]
                }
        })


class QuizResult(APIView):
    def get(self, request, quiz_id, user_id):
        if not Quiz.objects.filter(id=quiz_id).exists():
            raise NotFound(detail="Requested Quiz not found.", code=404)

        if not User.objects.filter(id=user_id).exists():
            raise NotFound(detail="Requested User not found.", code=404)

        # Quiz & User exist, let's return the data.
        quiz = Quiz.objects.get(id=quiz_id)
        results = QuizUserResult.objects.filter(quiz_id=quiz_id).filter(user_id=user_id).order_by("-date")

        return Response({
            'quiz_id': quiz.id,
            'material_id': quiz.material_id,
            'results': [
                [
                    {
                        'id': result.id,
                        'user': result.user.id,
                        'date': result.date,
                        'correct': result.correct,
                        'wrong': result.wrong,
                        'grade': result.get_grade(),
                        'data': result.data
                    } for result in results
                ]
            ]
        })


class QuizLeaderboard(APIView):
    # ta stevlika predstavlja koliko najboljsih uporabnikov vrne
    leaderboard_limit = 10

    def get(self, request, quiz_id):
        if not Quiz.objects.filter(id=quiz_id).exists():
            raise NotFound(detail="Requested Quiz not found.", code=404)

        # Quiz & User exist, let's return the data.
        quiz = Quiz.objects.get(id=quiz_id)
        results = QuizUserResult.objects.filter(quiz_id=quiz_id).order_by('-correct')[:self.leaderboard_limit]

        return Response({
            'quiz_id': quiz.id,
            'material_id': quiz.material_id,
            'leaderboard': [
                {
                    'id': result.id,
                    'user': result.user.id,
                    'date': result.date,
                    'correct': result.correct,
                    'wrong': result.wrong,
                    'grade': result.get_grade(),
                    'data': result.data
                } for result in results
            ],
        })
