from core.review.models import Review
from core.review.serializers import ReviewSerializer
from core.abstract.viewsets import AbstractViewSet
from rest_framework.permissions import AllowAny


class ReviewViewSet(AbstractViewSet):
    queryset = Review.objects.all()
    http_method_names = ("post", "get", "put", "delete")
    serializer_class = ReviewSerializer
    search_fields = ('title', 'body', 'author__id', 'book__title')
