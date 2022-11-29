from django.urls import path
from api import views

urlpatterns = [
    path('get-latest-products', views.get_latest_products)
]
