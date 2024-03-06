import pytest
from core.review.models import Review
from core.fixture.user import user
from core.fixture.publisher import publisher
from core.fixture.book import book


@pytest.fixture
def review(db, user, publisher, book):
    data = {
        'title': 'some title',
        'body': 'some body',
        'author': user,
        'book': book,
    }
    return Review.objects.create(**data)
