from django.shortcuts import render
from django.http import JsonResponse
from .models import Goal


def index(request):
    return render(request, 'goalapp/index.html', {})


def goals_list(request):
    goals = Goal.objects.all().values()
    context = {'goals': list(goals)}
    return JsonResponse(context)
