from django.shortcuts import render

# Create your views here.


def clima(request):
    return render(request, 'clima/clima.html')