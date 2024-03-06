from core.abstract.models import AbstractManager, AbstractModel
from django.db import models


def cover_directory_path(instance, filename):
    return "book_cover_{0}/{1}".format(instance.public_id, filename)


class BookManager(AbstractManager):
    pass


class Book(AbstractModel):
    title = models.CharField(max_length=100)
    author = models.ForeignKey(
        'core_user.User', on_delete=models.CASCADE, related_name='books')
    publisher = models.ForeignKey(
        'core_publisher.Publisher', on_delete=models.CASCADE, related_name='books')
    cover = models.ImageField(
        upload_to=cover_directory_path, blank=True, null=True)
    description = models.TextField(max_length=1000)

    objects = BookManager()

    def __str__(self):
        return f'{self.title}'
