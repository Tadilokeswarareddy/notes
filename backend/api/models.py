from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class NotesModel(models.Model):
    name = models.ForeignKey(User,on_delete=models.CASCADE)
    note = models.CharField(max_length=100)

    def __str__(self):
        return self.name.username