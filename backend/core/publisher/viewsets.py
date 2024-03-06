from core.abstract.viewsets import AbstractViewSet
from core.publisher.models import Publisher
from core.publisher.serializer import PublisherSerializer
from rest_framework.permissions import AllowAny


class PublisherViewSet(AbstractViewSet):
    serializer_class = PublisherSerializer
    http_method_names = ("post", "get", "put", "delete")
    queryset = Publisher.objects.all()
