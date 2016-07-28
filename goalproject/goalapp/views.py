from django.shortcuts import render
from .models import Goal


def index(request):
    goals = Goal.objects.all()
    context = {'goals': goals}
    return render(request, 'goalapp/index.html', context)
