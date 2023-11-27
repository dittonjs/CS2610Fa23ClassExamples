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
    notes = to_dicts(req.user.note_set.all()) # TODO what if there are a million of these
    return JsonResponse({ "notes": notes })



def to_dicts(models):
    return [model_to_dict(model) for model in models]