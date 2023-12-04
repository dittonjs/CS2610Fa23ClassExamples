from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from core.models import Note
from django.forms import model_to_dict
import json


# Create your views here.
@login_required
def create_note(req):
    body = json.loads(req.body)
    note = Note(
        title=body["title"],
        content=body["content"],
        user=req.user
    )
    note.save()
    return JsonResponse({ "note": model_to_dict(note) })


@login_required
def get_notes(req):
    if req.GET.get("page", "null") == "null":
        notes = Note.objects.all()[:50]
    else:
        startOffset = (int(req.GET.get("page")) - 1) * 50
        notes = Note.objects.all()[startOffset:startOffset+50]

    # TODO GET THE PAGE FROM THE CLIENT
    num_pages = int(Note.objects.count() / 50) + 1
    notes = to_dicts(notes)
    return JsonResponse({ "notes": notes, "num_pages": num_pages })



def to_dicts(models):
    return [model_to_dict(model) for model in models]