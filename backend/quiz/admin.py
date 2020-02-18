
from django.contrib import admin

from .models import *

admin.site.register(Quiz)
admin.site.register(QuizStatistics)
admin.site.register(QuizQuestion)
admin.site.register(QuizAnswer)
admin.site.register(QuizUserResult)
