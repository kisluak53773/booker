from typing import Any, Dict
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from core.user.serializers import UserSerializer


class LoginSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)
        data['user'] = UserSerializer(self.user).data
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)
        return data
