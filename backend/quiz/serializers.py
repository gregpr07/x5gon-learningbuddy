from rest_framework import serializers

from .models import QuizQuestion, QuizUserResult


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuizQuestion
        fields = ['text', 'correct']


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuizQuestion
        fields = ['text']


class UserResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuizUserResult
        fields = ['user', 'correct']

