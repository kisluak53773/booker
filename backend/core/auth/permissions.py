from rest_framework import permissions


class UserPermissions(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        if request.user.is_anonimous:
            return request.method in permissions.SAFE_METHODS

        if view.basename in ['book', 'publisher']:
            if request.method in permissions.SAFE_METHODS:
                return True
            return bool(request.user.is_superuser)

        if view.basename in ['review']:
            if request.method in permissions.SAFE_METHODS:
                return True
            return bool(request.user.is_superuser or request.user == obj.author)

        if view.basename in ['user']:
            if request.method in permissions.SAFE_METHODS:
                return True
            return (request.user.id == obj.id)

        return False
