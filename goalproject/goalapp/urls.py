from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'goals_list$', views.goals_list, name='goals_list')
]
