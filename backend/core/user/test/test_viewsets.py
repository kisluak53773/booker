import pytest
from core.fixture.user import user
from rest_framework import status


class TestUserViewSet:
    endpoint = '/api/user/'

    def test_list(self, client, user):
        response = client.get(self.endpoint)
        assert response.status_code == status.HTTP_200_OK
        assert response.data['count'] == 1

    def test_retrive(self, client, user):
        response = client.get(self.endpoint+str(user.id)+'/')
        assert response.status_code == status.HTTP_200_OK
        assert response.data['id'] == user.id
        assert response.data['email'] == user.email
        assert response.data['first_name'] == user.first_name
        assert response.data['last_name'] == user.last_name
