from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(req):
    names = [
        "Joseph",
        "Catelyn",
        "Sophie",
        "Mitch",
    ]
    context = {
        "user_name": "Joseph",
        "admin": True,
        "names": names
    }
    return render(req, "core/index.html", context)