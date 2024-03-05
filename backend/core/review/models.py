from django.db import models
from core.abstract.models import AbstractModel, AbstractManager


class ReviewManager(AbstractManager):
    pass


class Review(AbstractModel):
    title = models.CharField(max_length=100)
    body = models.TextField(max_length=1500)
    author = models.ForeignKey(
        'core_user.User', on_delete=models.CASCADE, related_name='Reviews')

    objects = ReviewManager()

    def __str__(self):
        return f"{self.title}"
