from django.db import models
from core.abstract.models import AbstractManager, AbstractModel


class GenreManager(AbstractManager):
    pass


class Genre(AbstractModel):
    genre = models.CharField(max_length=100)

    objects = GenreManager()

    def __str__(self):
        return f'{self.genre}'
