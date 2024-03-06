import pytest
from core.book.models import Book
from core.fixture.user import user
from core.fixture.publisher import publisher


@pytest.fixture
def book(db, user, publisher):
    data = {
        'title': 'Dune',
        'author': user,
        'publisher': publisher,
        'description': 'Sci-fi adnveture'
    }
    return Book.objects.create(**data)
