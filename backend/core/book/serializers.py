from core.abstract.serializers import AbstractSerializer
from core.book.models import Book


class BookSerializer(AbstractSerializer):

    class Meta:
        model = Book
        fields = '__all__'
