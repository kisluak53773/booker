import pytest
from core.genre.models import Genre


@pytest.mark.django_db
def test_create():
    genre = Genre.objects.create(gener='fantasy')
    assert genre.genre == 'fantasy'
