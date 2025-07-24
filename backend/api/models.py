from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Notes(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    title = models.CharField(max_length=50,blank=True)
    note = models.TextField(max_length=150)

    def __str__(self):
        return self.user.username