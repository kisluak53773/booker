from core.abstract.models import AbstractManager, AbstractModel
from django.db import models
from django.conf import settings


class BookManager(AbstractManager):
    pass


class Book(AbstractModel):
    title = models.CharField(max_length=100)
    author = models.ForeignKey(
        'core_user.User', on_delete=models.CASCADE, related_name='Books')
    publisher = models.ForeignKey(
        'core_publisher.Publisher', on_delete=models.CASCADE, related_name='Books')
    cover = models.ImageField(
        upload_to=settings.MEDIA_ROOT, blank=True, null=True)
    description = models.TextField(max_length=1000)

    objects = BookManager()

    def __str__(self):
        return f'{self.title}'
