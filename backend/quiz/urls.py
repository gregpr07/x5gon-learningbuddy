from django.urls import path

from . import views

urlpatterns = [
    path('<int:quiz_id>/', views.QuizInfo.as_view()),
    path('statistics/<int:quiz_id>/', views.QuizStats.as_view()),
    path('result/<int:quiz_id>/<int:user_id>/', views.QuizResult.as_view()),
    path('leaderboard/<int:quiz_id>/', views.QuizLeaderboard.as_view()),
    path('generate/<int:material_id>/', views.QuizGenerate.as_view()),
]
