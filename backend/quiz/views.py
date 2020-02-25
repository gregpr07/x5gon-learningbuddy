# not all imports are neccessary yet
import json
import os

import requests
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


def get_generate_json(material_id):
    return json.loads(requests.get(
        url="http://" + os.getenv('MSCRIPTS_HOST') + ":" + os.getenv('MSCRIPTS_PORT') + "/quiz/generate/" + str(
            material_id) + "/").content)


class QuizGenerate(APIView):
    def get(self, request, material_id):
        if Quiz.objects.filter(material_id=material_id).exists():
            raise NotFound(detail="Requested Quiz has already been generated.", code=404)
        else:
            save_quiz_to_db(material_id)
            return Response()


def save_quiz_to_db(material_id):
    generated_json = list(get_generate_json(material_id))

    stats = QuizStatistics.objects.create()
    quiz = Quiz.objects.create(material_id=material_id, stats=stats)

    print(generated_json)

    for json_question in generated_json:
        # for now every first answer is correct
        question = QuizQuestion.objects.create(quiz=quiz, text=json_question['question'], correct=0)
        correct = QuizAnswer.objects.create(question=question, text=json_question['answer'])
        for json_answer in json_question['distractors']:
            QuizAnswer.objects.create(question=question, text=json_answer)


class QuizStats(APIView):
    def get(self, request, quiz_id):
        if not Quiz.objects.filter(id=quiz_id).exists():
            raise NotFound(detail="Requested Quiz not found.", code=404)

        # Quiz exists, let's return the data.
        quiz = Quiz.objects.get(id=quiz_id)
        statistics = quiz.stats

        return Response({
            'quiz_id': quiz.id,
            'material_id': quiz.material_id,
            'stats':
                {
                    'upvotes': statistics.upvoters.count(),
                    'downvotes': statistics.downvoters.count(),
                    'views': statistics.views,
                    'upvoters': [
                        {
                            'id': user.id,
                            'username': user.username,
                        } for user in statistics.upvoters.all()
                    ],
                    'downvoters': [
                        {
                            'id': user.id,
                            'username': user.username,
                        } for user in statistics.downvoters.all()
                    ]
                }
        })


class QuizResult(APIView):
    # ta stevlika predstavlja koliko zadnjih rezultatov uporabnika vrne
    RESULT_LIMIT = 10

    def get(self, request, quiz_id, user_id):
        if not Quiz.objects.filter(id=quiz_id).exists():
            raise NotFound(detail="Requested Quiz not found.", code=404)

        if not User.objects.filter(id=user_id).exists():
            raise NotFound(detail="Requested User not found.", code=404)

        # Quiz & User exist, let's return the data.
        quiz = Quiz.objects.get(id=quiz_id)
        results = QuizUserResult.objects.filter(quiz_id=quiz_id).filter(
            user_id=user_id).order_by("-date")[:self.RESULT_LIMIT]

        return Response({
            'quiz_id': quiz.id,
            'material_id': quiz.material_id,
            'results': [
                [
                    {
                        'user_id': result.user.id,
                        'username': result.user.username,
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
    LEADERBOARD_LIMIT = 10

    def get(self, request, quiz_id):
        if not Quiz.objects.filter(id=quiz_id).exists():
            raise NotFound(detail="Requested Quiz not found.", code=404)

        # Quiz & User exist, let's return the data.
        quiz = Quiz.objects.get(id=quiz_id)
        results = QuizUserResult.objects.filter(
            quiz_id=quiz_id).order_by('-correct')[:self.LEADERBOARD_LIMIT]

        return Response({
            'quiz_id': quiz.id,
            'material_id': quiz.material_id,
            'leaderboard': [
                {
                    'user_id': result.user.id,
                    'username': result.user.username,
                    'date': result.date,
                    'correct': result.correct,
                    'wrong': result.wrong,
                    'grade': result.get_grade(),
                    'data': result.data
                } for result in results
            ],
        })
