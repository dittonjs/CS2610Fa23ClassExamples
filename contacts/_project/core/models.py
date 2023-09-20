from django.db import models

# Create your models here.
class Contact(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.TextField()
    email = models.TextField()
    phone = models.TextField()

