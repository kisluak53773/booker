from core.abstract.serializers import AbstractSerializer
from core.user.models import User


class UserSerializer(AbstractSerializer):

    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name']
        read_only_fields = ['is_active']
