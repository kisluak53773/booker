from core.abstract.serializers import AbstractSerializer
from core.book.models import Book
from rest_framework import serializers
from core.genre.serializers import GenreSerializer
from core.review.serializers import ReviewSerializer


class BookSerializer(AbstractSerializer):
    author = serializers.SerializerMethodField()
    publisher = serializers.SerializerMethodField()
    genres = serializers.SerializerMethodField()
    reviews = serializers.SerializerMethodField()

    class Meta:
        model = Book
        fields = ['id', 'title', 'cover', 'description',
                  'author', 'publisher', 'genres', 'reviews']

    def get_author(self, instance):
        return f"{instance.author.first_name} {instance.author.last_name}"

    def get_publisher(self, instance):
        return instance.publisher.title

    def get_genres(self, instance):
        result = []
        for genre in instance.genre.all():
            result.append(GenreSerializer(genre).data)
        return result

    def get_reviews(self, instance):
        result = []
        for review in instance.reviews.all():
            result.append(ReviewSerializer(review).data)
        return result
