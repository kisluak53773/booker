from core.abstract.viewsets import AbstractViewSet
from core.auth.permissions import UserPermissions
from core.genre.serializers import GenreSerializer
from core.genre.models import Genre


class GenreViewSet(AbstractViewSet):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer
    permission_classes = (UserPermissions,)
    http_method_names = ("post", "get", "put", "delete")
    search_fields = ('genre',)
