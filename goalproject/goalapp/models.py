from django.db import models


class Goal(models.Model):
    title = models.CharField(max_length=100)
    # start_date = models.DateField()
    # end_date = models.DateField()


class Task(models.Model):
    title = models.CharField(max_length=100)
    goal = models.ForeignKey(Goal, on_delete=models.CASCADE)
    finished = models.BooleanField()
