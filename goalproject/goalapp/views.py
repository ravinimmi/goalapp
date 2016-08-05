from django.shortcuts import render
from django.http import JsonResponse
from .models import Goal


def index(request):
    return render(request, 'goalapp/index.html', {})


def goals_list(request):
    goals = Goal.objects.all().values()
    response = JsonResponse({'goals': list(goals)})
    return response


def goal_details(request, id):
    try:
        goal = Goal.objects.values().get(id=id)
        response = JsonResponse({'success': True, 'goal': goal})
    except Goal.DoesNotExist:
        response = JsonResponse({'success': False}, status=404)
    return response
