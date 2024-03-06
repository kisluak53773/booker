from core.abstract.serializers import AbstractSerializer
from core.publisher.models import Publisher
from rest_framework import serializers


class PublisherSerializer(AbstractSerializer):
    books = serializers.SerializerMethodField()

    class Meta:
        model = Publisher
        fields = ['id', 'title', 'created', 'updated', 'books']

    def get_books(self, instance):
        return instance.books.all()
