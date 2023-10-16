from django.db import models

# Create your models here.
class Student(models.Model):
    id = models.BigAutoField(primary_key=True)

class StudyGroup(models.Model):
    id = models.BigAutoField(primary_key=True)
    students = models.ManyToManyField("Student")
    deleted = models.BooleanField()

class Note(models.Model):
    content = models.TextField()
    study_group = models.ForeignKey("StudyGroup", on_delete=models.CASCADE)
    student = models.ForeignKey("Student", on_delete=models.CASCADE)

class Profile(models.Model):
    id = models.BigAutoField(primary_key=True)
    student = models.OneToOneField('Student', on_delete=models.CASCADE)
