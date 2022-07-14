from django.contrib import admin
from animales.models import animale

# Register your models here.
@admin.register(animale)
class animales(admin.ModelAdmin):
    list_display = ['id','altura','nombre', 'descripcion']
