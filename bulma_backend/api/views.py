from .serializers import ProductSerializer
from .models import Product
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view()
def get_latest_products(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)
