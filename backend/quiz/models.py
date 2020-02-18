from django.contrib.auth.models import User
from django.db import models


class QuizStatistics(models.Model):
    upvoters = models.ManyToManyField(User, related_name='upvoters', blank=True)
    downvoters = models.ManyToManyField(User, related_name='downvoters', blank=True)
    views = models.IntegerField(default=0)

    class Meta:
        verbose_name_plural = "Quiz statistics"

    def increase_views(self):
        self.views = self.views + 1
        self.save()

    def has_rated(self, user):
        return user in self.upvoters or user in self.downvoters

    def upvote(self, user):
        self.upvoters.add(user)
        self.save()

    def downvote(self, user):
        self.downvoters.add(user)
        self.save()


class Quiz(models.Model):
    resource_id = models.IntegerField(unique=True)
    stats = models.OneToOneField(QuizStatistics, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = "Quizzes"

    def get_quiz_questions(self):
        return QuizQuestion.objects.filter(quiz=self)

    def get_quiz_question(self, index):
        return QuizQuestion.objects.filter(quiz=self)[index]

    def __str__(self):
        return str(self.resource_id) + "'s quiz"


class QuizQuestion(models.Model):
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    text = models.CharField(max_length=255)
    correct = models.IntegerField(default=0)

    def get_quiz_answers(self):
        return QuizAnswer.objects.filter(question=self)

    def get_quiz_correct_answer(self):
        return self.get_quiz_answers()[self.correct]

    def __str__(self):
        return str(self.quiz.resource_id) + " > " + self.text


class QuizAnswer(models.Model):
    question = models.ForeignKey(QuizQuestion, on_delete=models.CASCADE)
    text = models.CharField(max_length=255)

    def __str__(self):
        return self.question.__str__() + " > " + self.text


class QuizUserResult(models.Model):
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)
    correct = models.IntegerField(default=0)
    wrong = models.IntegerField(default=0)
    data = models.TextField(max_length=500)

    def get_correct_percentage(self):
        return (self.correct * 100) / (self.correct + self.wrong)

    def get_wrong_percentage(self):
        return (self.wrong * 100) / (self.correct + self.wrong)

    def get_grade(self):
        correct_percentage = self.get_correct_percentage()
        if correct_percentage >= 90:
            return 'A'
        if correct_percentage >= 80:
            return 'B'
        if correct_percentage >= 70:
            return 'C'
        if correct_percentage >= 60:
            return 'D'
        if correct_percentage >= 50:
            return 'E'
        return 'F'

    def __str__(self):
        return self.quiz.__str__() + " > " + self.user.username
