import pytest
from core.publisher.models import Publisher

data = {
    'title': 'Packt publishing',
}


@pytest.fixture
def publisher(db):
    return Publisher.objects.create(**data)
