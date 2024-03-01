from rest_framework.permissions import AllowAny
from rest_framework import viewsets
from core.auth.serializers import RegisterSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework import status


class RegisterViewSet(viewsets.ViewSet):
    serializer_class = RegisterSerializer
    http_method_names = ['post']
    permission_classes = (AllowAny,)

    def create(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        refresh = RefreshToken.for_user(user)
        data = {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            'user': serializer.data,
        }
        return Response(data=data, status=status.HTTP_201_CREATED)
