import pytest
from core.publisher.models import Publisher


@pytest.mark.django_db
def test_create():
    publisher = Publisher.objects.create(title='Packt publishing')
    assert publisher.title == 'Packt publishing'
