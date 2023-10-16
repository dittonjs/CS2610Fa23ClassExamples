from django.shortcuts import render, redirect
from .models import Contact
# Create your views here.
def index(req):
    contacts = Contact.objects.all()
    return render(req, "core/index.html", { "contacts": contacts })

def new_contact(req):
    return render(req, "core/new_contact.html")

# python manage.py makemigrations
# ptyhon manage.py migrate

def create_contact(req):
    contact = Contact(
        name=req.POST["name"],
        email=req.POST["email"],
        phone=req.POST["phone"]
    )
    contact.save()
    # todo save a contact in the database
    return redirect("/")


def get_contact(req, id):
    contact = Contact.objects.get(id=id)
    return render(req, 'core/contact.html', {"contact": contact})

def update_contact(req, id):
    contact = Contact.objects.get(id=id)
    contact.name = req.POST["name"]
    contact.email = req.POST["email"]
    contact.phone = req.POST["phone"]
    contact.save()
    return redirect("/")

