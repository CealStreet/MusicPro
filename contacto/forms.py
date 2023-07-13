from django import forms

class FormularioContacto(forms.Form):
    
    serie=forms.CharField(label="Serie Del Producto", required=True)
    nombre=forms.CharField(label="Nombre", required=True)
    marca=forms.CharField(label="Marca", required=True)
    codigo=forms.CharField(label="Codigo", required=True)
    fecha=forms.CharField(label="Fecha", required=True)
    valor=forms.CharField(label="valor", required=True)

    contenido=forms.CharField(label="Contenido", widget=forms.Textarea)