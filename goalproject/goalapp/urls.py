from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^api/goals/$', views.GoalList.as_view()),
    url(r'^api/goals/(?P<pk>[0-9]+)/$', views.GoalDetail.as_view()),
]
