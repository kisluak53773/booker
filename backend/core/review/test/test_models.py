import pytest
from core.review.models import Review
from core.fixture.user import user
from core.fixture.book import book
from core.fixture.publisher import publisher


@pytest.mark.django_db
def test_create(user, book, publisher):
    data = {
        'title': 'some title',
        'body': 'some body',
        'author': user,
        'book': book,
    }
    review = Review.objects.create(**data)
    assert review.title == data['title']
    assert review.body == data['body']
    assert review.author == data['author']
    assert review.book == data['book']
