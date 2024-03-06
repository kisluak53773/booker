from core.abstract.serializers import AbstractSerializer
from core.review.models import Review


class ReviewSerializer(AbstractSerializer):

    class Meta:
        model = Review
        fields = '__all__'
