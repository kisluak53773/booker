import pytest
from core.book.models import Book
from core.fixture.user import user
from core.fixture.publisher import publisher


@pytest.mark.django_db
def test_create(user, publisher):
    data = {
        'title': 'Dune',
        'auhtor': user,
        'publisher': publisher,
        'description': 'Sci-fi adnveture'
    }
    book = Book.objects.create(**data)
    assert book.title == data['title']
    assert book.author == data['auhtor']
    assert book.publisher == data['publisher']
    assert book.description == data['description']
