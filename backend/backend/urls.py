
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import ProductViewSet

# Criação da instância do roteador
router = DefaultRouter()

# Registrando o ViewSet ao roteador
router.register(r'products', ProductViewSet)

# Incluindo as rotas no urlpatterns
urlpatterns = [
    path('api/', include(router.urls)),
]
