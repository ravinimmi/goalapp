from django.contrib import admin

# Register your models here.
from .models import Goal


class GoalAdmin(admin.ModelAdmin):
    fields = ['title']
    list_display = ('title',)

admin.site.register(Goal, GoalAdmin)
