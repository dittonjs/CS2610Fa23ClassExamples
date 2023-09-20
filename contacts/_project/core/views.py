from django.shortcuts import render, redirect
from django.http import HttpRequest
from .models import Contact
# Create your views here.
def index(req):
    return render(req, "core/index.html")

def new_contact(req):
    return render(req, "core/new_contact.html")

def create_contact(req):
    contact = Contact(
        name=req.POST["name"],
        email=req.POST["email"],
        phone=req.POST["phone"]
    )
    contact.save()
    # todo save a contact in the database
    return redirect("/")