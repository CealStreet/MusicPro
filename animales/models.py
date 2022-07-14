from django.db import models
from django.contrib.auth.models import User

class animale(models.Model):
    nombre= models.CharField(max_length=50)
    altura= models.IntegerField()
    descripcion= models.TextField()
    image=models.ImageField(upload_to="animales", null =True)
    def __str__(self):
        return self.nombre