from django.urls import path

from . import views

urlpatterns = [
    path('<int:quiz_id>/', views.QuizInfo.as_view()),
    path('leaderboard/<int:quiz_id>/', views.QuizLeaderboard.as_view()),
]
