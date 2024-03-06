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

data_another_user = {
    "email": "some@gmail.com",
    "first_name": "another",
    "last_name": "user",
    "password": "another_user"
}


@pytest.fixture
def user(db):
    return User.objects.create_user(**data_user)


@pytest.fixture
def superuser(db):
    return User.objects.create_superuser(**data_superuser)


@pytest.fixture
def another_user(db):
    return User.objects.create(**data_another_user)
