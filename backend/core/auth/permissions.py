from rest_framework import permissions


class UserPermissions(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        if request.user.is_anonymous:
            return request.method in permissions.SAFE_METHODS

        if view.basename in ['book', 'publisher', 'genre']:
            if request.method in permissions.SAFE_METHODS:
                return True
            return bool(request.user and request.user.is_superuser)

        if view.basename in ['review']:
            if request.method in permissions.SAFE_METHODS:
                return True
            return bool(request.user.is_superuser or request.user == obj.author)

        if view.basename in ['user']:
            if request.method in permissions.SAFE_METHODS:
                return True
            return (request.user.id == obj.id)

        return False

    def has_permission(self, request, view):
        if view.basename in ["user", "review"]:
            if request.user.is_anonymous:
                return request.method in permissions.SAFE_METHODS

            return bool(request.user and request.user.is_authenticated)

        if view.basename in ['book', 'publisher', 'genre']:
            if request.method in permissions.SAFE_METHODS:
                return True
            return bool(request.user and request.user.is_superuser)

        return False
