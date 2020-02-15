from users import views
from django.urls import path

urlpatterns = [
    path('test/', views.test.as_view()),
    path('<str:user>/', views.userinfo.as_view())
]
