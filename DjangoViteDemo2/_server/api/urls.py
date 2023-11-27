from django.urls import path
from . import views

urlpatterns = [
    path('create_note/', view=views.create_note, name="create_note"),
    path('notes/', view=views.get_notes, name="get notes")
]