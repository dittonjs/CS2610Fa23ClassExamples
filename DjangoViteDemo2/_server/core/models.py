from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Note(models.Model):
    title = models.TextField()
    content = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)