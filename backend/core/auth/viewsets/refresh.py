from rest_framework.request import Request
from rest_framework.viewsets import ViewSet
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.exceptions import TokenError
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenRefreshView


class RefreshViewSet(ViewSet, TokenRefreshView):
    permission_classes = (AllowAny,)
    http_method_names = ['post']

    def create(self, request, *args, **kwargs):
        authorization_header = request.headers.get('Authorization')
        if not authorization_header or not authorization_header.startswith("Bearer "):
            return Response({'message': 'jwt must be provided'}, status=status.HTTP_401_UNAUTHORIZED)
        refresh_token = authorization_header.split()[1]
        try:
            tokens = RefreshToken(refresh_token)
        except TokenError as e:
            return Response({'message': 'jwt expired'}, status=status.HTTP_401_UNAUTHORIZED)
        data = {
            'access': str(tokens.access_token),
            'refresh': str(tokens)
        }
        return Response(data, status=status.HTTP_200_OK)
