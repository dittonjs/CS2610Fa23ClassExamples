
from django.urls import path
from . import views
urlpatterns = [
    path("", view=views.index, name="index"),
    path("new_contact/", view=views.new_contact, name="new contact"),
    path("create_contact/", view=views.create_contact, name="create contact"),
    path("contacts/<int:id>/", view=views.get_contact, name="get contact"),
    path("update_contact/<int:id>/", view=views.update_contact, name="update contact"),
]