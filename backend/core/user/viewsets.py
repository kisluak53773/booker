from core.abstract.viewsets import AbstractViewSet
from core.user.serializers import UserSerializer
from rest_framework.permissions import AllowAny
from core.user.models import User


class UserViewSet(AbstractViewSet):
    serializer_class = UserSerializer
    http_method_names = ('get', 'patch',)
    permission_classes = (AllowAny,)

    def get_queryset(self):
        if self.request.user.is_superuser:
            return User.objects.all()
        return User.objects.exclude(is_superuser=True)
