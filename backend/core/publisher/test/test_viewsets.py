import pytest
from core.fixture.user import user, superuser
from core.fixture.publisher import publisher
from rest_framework import status
from core.publisher.models import Publisher


class TestPublisherViewSet:
    endpoint = '/api/publisher/'

    def test_list(self, client, publisher):
        response = client.get(self.endpoint)
        assert response.status_code == status.HTTP_200_OK
        assert response.data["count"] == 1

    def test_retrive(self, client, publisher):
        response = client.get(self.endpoint + str(publisher.id) + "/")
        assert response.status_code == status.HTTP_200_OK
        assert response.data["id"] == publisher.id
        assert response.data["title"] == publisher.title

    def test_create(self, client, superuser):
        client.force_authenticate(user=superuser)
        data = {
            'title': 'Black horse publishing',
        }
        response = client.post(self.endpoint, data)
        assert response.status_code == status.HTTP_201_CREATED
        assert response.data['title'] == data['title']

    def test_update(self, client, superuser, publisher):
        client.force_authenticate(user=superuser)
        data = {
            'title': 'Changed title',
        }
        response = client.put(self.endpoint+str(publisher.id)+'/', data)
        assert response.status_code == status.HTTP_200_OK
        assert response.data['title'] == data['title']

    def test_destroy(self, client, superuser, publisher):
        client.force_authenticate(user=superuser)
        response = client.delete(self.endpoint+str(publisher.id)+'/')
        assert response.status_code == status.HTTP_204_NO_CONTENT

    def test_anonimous_create(self, client):
        data = {
            'title': 'Black horse publishing',
        }
        response = client.post(self.endpoint, data)
        assert response.status_code == status.HTTP_401_UNAUTHORIZED

    def test_anonimoys_update(self, client, publisher):
        data = {
            'title': 'Changed title',
        }
        response = client.put(self.endpoint+str(publisher.id)+'/', data)
        assert response.status_code == status.HTTP_401_UNAUTHORIZED

    def test_anonimous_destroy(self, client, publisher):
        response = client.delete(self.endpoint+str(publisher.id)+'/')
        assert response.status_code == status.HTTP_401_UNAUTHORIZED

    def test_basic_user_create(self, client, user):
        client.force_authenticate(user=user)
        data = {
            'title': 'Black horse publishing',
        }
        response = client.post(self.endpoint, data)
        assert response.status_code == status.HTTP_403_FORBIDDEN

    def test_basic_user_update(self, client, publisher, user):
        client.force_authenticate(user=user)
        data = {
            'title': 'Changed title',
        }
        response = client.put(self.endpoint+str(publisher.id)+'/', data)
        assert response.status_code == status.HTTP_403_FORBIDDEN

    def test_basic_user_destroy(self, client, publisher, user):
        client.force_authenticate(user=user)
        response = client.delete(self.endpoint+str(publisher.id)+'/')
        assert response.status_code == status.HTTP_403_FORBIDDEN
