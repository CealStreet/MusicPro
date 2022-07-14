from django.shortcuts import render


from pedidos.models import LineaPedido

def listarpedido(request):
    Pedido= LineaPedido.objects.all()

    data ={
        'Listapedido': Pedido
    }
    return render(request, 'vistapedido/vistapedido.html', data)