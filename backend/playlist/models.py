from django.db import models
from django.contrib.auth.models import User
from django.contrib.postgres.fields import ArrayField

## todo: PlaylistStats


class Material(models.Model):
    x5_id = models.IntegerField()
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    provider = models.CharField(max_length=100)


class Playlist(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=500)
    created_by = models.OneToOneField(
        User, on_delete=models.SET_NULL, null=True)
    views = models.IntegerField()
    materials = models.ManyToManyField(Material)


# nevem ce rabm
class Scoreboard(models.Model):
    playlist = models.OneToOneField(Playlist, on_delete=models.CASCADE)


class Scored(models.Model):
    user = models.OneToOneField(User)
    score = models.FloatField()
