from django.urls import path

from . import views

urlpatterns = [
    path('all/', views.Users.as_view()),
    path('leaderboard/', views.UserLeaderboard.as_view()),
    path('data/', views.UserInfo.as_view()),
]
