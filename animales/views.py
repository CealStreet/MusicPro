from django.shortcuts import render
from animales.models import animale

def animales(request):

    posts= animale.objects.all()



    data = {
        'Perro': posts
        }
    return render(request, "animales/perro.html", data)