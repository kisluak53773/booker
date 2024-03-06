from django.db import models
from core.abstract.models import AbstractModel, AbstractManager


class PublisherManager(AbstractManager):
    pass


class Publisher(AbstractModel):
    title = models.CharField(max_length=100, unique=True)

    objects = PublisherManager()

    def str(self):
        return f"{self.title}"
