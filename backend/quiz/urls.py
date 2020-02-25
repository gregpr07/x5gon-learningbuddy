from django.urls import path

from . import views

urlpatterns = [
    path('<int:material_id>/', views.QuizInfo.as_view()),
    path('statistics/<int:material_id>/', views.QuizStats.as_view()),
    path('result/<int:material_id>/<int:user_id>/', views.QuizResult.as_view()),
    path('leaderboard/<int:material_id>/', views.QuizLeaderboard.as_view()),
    path('generate/<int:material_id>/', views.QuizGenerate.as_view()),
]
