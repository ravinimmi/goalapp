from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'api/goals$', views.goals_list, name='goals_list'),
    url(r'api/goals/(?P<id>[0-9]+)$', views.goal_details, name='goal_details')
]
