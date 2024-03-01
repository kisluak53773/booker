from rest_framework import serializers
from core.user.serializers import UserSerializer
from core.user.models import User


class RegisterSerializer(UserSerializer):
    password = serializers.CharField(
        max_length=128, min_length=4, required=True, write_only=True)

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

    class Meta:
        model = User
        fields = ['id', 'email', 'first_name',
                  'last_name', 'created', 'updated', 'password']
