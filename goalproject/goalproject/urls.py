from django.conf.urls import url, include
from django.contrib import admin

urlpatterns = [
    url(r'^goals/', include('goalapp.urls')),
    url(r'^admin/', admin.site.urls),
]
