import django_filters
from core.genre.models import Genre


class GenreFilter(django_filters.FilterSet):
    class Meta:
        model = Genre
        fields = ['genre']
