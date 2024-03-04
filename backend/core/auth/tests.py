import pytest
from core.fixture.user import user
from rest_framework import status


class TestAuthenticationViewSet:
    endpoint = '/api/auth/'

    def test_login(self, client, user):
        data = {'email': user.email, 'password': '1234'}
        response = client.post(self.endpoint+'login/', data)
        assert response.status_code == status.HTTP_200_OK
        assert response.data['access']
        assert response.data['refresh']
        assert response.data['user']['email'] == user.email

    @pytest.mark.django_db
    def test_register(self, client):
        data_user = {
            'email': 'kisluak53773@gmail.com',
            'first_name': 'Test name',
            'last_name': 'Test second name',
            'password': '1234'
        }
        response = client.post(self.endpoint+'register/', data_user)
        assert response.status_code == status.HTTP_201_CREATED

    def test_refresh(self, client, user):
        data = {'email': user.email, 'password': '1234'}
        response = client.post(self.endpoint+'login/', data)
        assert response.status_code == status.HTTP_200_OK
        headers = {'Authorization': f"Bearer {response.data['refresh']}"}
        response = client.post(self.endpoint+'refresh/', headers=headers)
        assert response.status_code == status.HTTP_200_OK
        assert response.data['access']
        assert response.data['refresh']
