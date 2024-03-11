from core.abstract.serializers import AbstractSerializer
from core.genre.models import Genre


class GenreSerializer(AbstractSerializer):

    class Meta:
        model = Genre
        fields = '__all__'
