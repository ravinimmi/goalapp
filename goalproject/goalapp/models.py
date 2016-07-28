from django.db import models


class Goal(models.Model):
    title = models.CharField(max_length=100)
