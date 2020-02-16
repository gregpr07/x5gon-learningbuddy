
from django.contrib import admin

from quiz.models import ResourceStatistics, Quiz, QuizQuestion, QuizAnswer, QuizUserResult

admin.site.register(ResourceStatistics)
admin.site.register(Quiz)
admin.site.register(QuizQuestion)
admin.site.register(QuizAnswer)
admin.site.register(QuizUserResult)
