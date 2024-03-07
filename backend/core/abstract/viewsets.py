from rest_framework import viewsets
from rest_framework import filters
from core.auth.permissions import UserPermissions


class AbstractViewSet(viewsets.ModelViewSet):
    filter_backends = (filters.OrderingFilter, filters.SearchFilter)
    ordering_fields = ['updated', 'created']
    ordering = ['-updated']
    permission_classes = (UserPermissions,)
