from rest_framework.response import Response
from core.abstract.viewsets import AbstractViewSet
from core.book.serializers import BookSerializer
from core.book.models import Book
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser


class BookViewSet(AbstractViewSet):
    http_method_names = ("post", "get", "put", "delete")
    serializer_class = BookSerializer
    queryset = Book.objects.all()
    parser_classes = (MultiPartParser, FormParser)
    search_fields = ('title', 'description', 'author__id', '=publisher__title')

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
