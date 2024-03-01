import pytest
from core.user.models import User

data_user = {
    'email': 'kisluak53773@gmail.com',
    'first_name': 'Test name',
    'last_name': 'Test second name',
    'password': '1234'
}

data_superuser = {
    "email": "testsuperuser@gmail.com",
    "first_name": "Test",
    "last_name": "Superuser",
    "password": "test_password"
}


@pytest.mark.django_db
def test_create_user():
    user = User.objects.create_user(**data_user)
    assert user.email == data_user['email']
    assert user.first_name == data_user['first_name']
    assert user.last_name == data_user['last_name']


@pytest.mark.django_db
def test_create_superuser():
    user = User.objects.create_superuser(**data_superuser)
    assert user.email == data_superuser['email']
    assert user.first_name == data_superuser['first_name']
    assert user.last_name == data_superuser['last_name']
    assert user.is_superuser == True
    assert user.is_staff == True
