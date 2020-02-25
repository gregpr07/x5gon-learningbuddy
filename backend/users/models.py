from django.contrib.auth.models import User
from django.db import models
from django.utils import timezone
from django.db.models.signals import post_save


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    description = models.TextField(
        max_length=300, default="Another cool user.")
    proffesional = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username + "'s profile"


class ProfileStatistics(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    # * engagement
    # to nerabmo, ker lahko use dobis direkt iz databaze - quiz
    # documents_read = models.IntegerField(default=0)
    # documents_rated = models.IntegerField(default=0)
    # quizzes_played = models.IntegerField(default=0)
    # points = models.IntegerField(default=0)

    # * statistics
    rating = models.FloatField(default=0)

    def add_points(self, amount):
        self.points = self.points + amount
        self.save()

    def increase_documents_read(self):
        self.documents_read = self.documents_read + 1
        self.save()

    def increase_quizzes_played(self):
        self.quizzes_played = self.quizzes_played + 1
        self.save()

    def __str__(self):
        return self.user.username + "'s statistics"

    def stats(self):
        return {'read': self.documents_read}


# generate profiles automatically
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
        ProfileStatistics.objects.create(user=instance)


post_save.connect(create_user_profile, sender=User)
