import pytest
from core.fixture.publisher import publisher
from core.fixture.user import superuser, user
from core.fixture.book import book
from rest_framework import status


class TestBookViewSet:
    endpoint = '/api/book/'

    def test_list(self, client, book, user, publisher):
        response = client.get(self.endpoint)
        assert response.status_code == status.HTTP_200_OK
        assert response.data['count'] == 1

    def test_retrieve(self, client, user, publisher, book):
        response = client.get(self.endpoint + str(book.id) + "/")
        assert response.status_code == status.HTTP_200_OK
        assert response.data["id"] == book.id
        assert response.data["title"] == book.title
        assert response.data["author"] == book.author.id
        assert response.data['publisher'] == book.publisher.id
        assert response.data['description'] == book.description

    def test_create(self, client, superuser, user, publisher):
        client.force_authenticate(user=superuser)
        data = {
            'title': 'Dune',
            'author': user.pk,
            'publisher': publisher.pk,
            'description': 'Sci-fi adventure'
        }
        response = client.post(self.endpoint, data)
        assert response.status_code == status.HTTP_201_CREATED
        assert response.data['title'] == data['title']

    def test_update(self, client, superuser, user, publisher, book):
        client.force_authenticate(user=superuser)
        data = {
            'title': 'Dune',
            'author': user.pk,
            'publisher': publisher.pk,
            'description': 'New adventure'
        }
        response = client.put(self.endpoint+str(book.id)+'/', data)
        assert response.status_code == status.HTTP_200_OK
        assert response.data['description'] == data['description']

    def test_destroy(self, client, superuser, book, publisher, user):
        client.force_authenticate(user=superuser)
        response = client.delete(self.endpoint+str(book.id)+'/')
        assert response.status_code == status.HTTP_204_NO_CONTENT

    def test_anonymous_create(self, client, user, publisher):
        data = {
            'title': 'Dune',
            'author': user.pk,
            'publisher': publisher.pk,
            'description': 'Sci-fi adventure'
        }
        response = client.post(self.endpoint, data)
        assert response.status_code == status.HTTP_401_UNAUTHORIZED

    def test_anonymous_update(self, client, user, publisher, book):
        data = {
            'title': 'Dune',
            'author': user.pk,
            'publisher': publisher.pk,
            'description': 'New adventure'
        }
        response = client.put(self.endpoint+str(book.id)+'/', data)
        assert response.status_code == status.HTTP_401_UNAUTHORIZED

    def test_anonimoys_destroy(self, client, book, publisher, user):
        response = client.delete(self.endpoint+str(book.id)+'/')
        assert response.status_code == status.HTTP_401_UNAUTHORIZED

    def test_basic_user_create(self, client, user, publisher):
        client.force_authenticate(user=user)
        data = {
            'title': 'Dune',
            'author': user.pk,
            'publisher': publisher.pk,
            'description': 'Sci-fi adventure'
        }
        response = client.post(self.endpoint, data)
        assert response.status_code == status.HTTP_403_FORBIDDEN

    def test_basic_user_update(self, client, user, publisher, book):
        client.force_authenticate(user=user)
        data = {
            'title': 'Dune',
            'author': user.pk,
            'publisher': publisher.pk,
            'description': 'New adventure'
        }
        response = client.put(self.endpoint+str(book.id)+'/', data)
        assert response.status_code == status.HTTP_403_FORBIDDEN

    def test_basic_user_destroy(self, client, book, publisher, user):
        client.force_authenticate(user=user)
        response = client.delete(self.endpoint+str(book.id)+'/')
        assert response.status_code == status.HTTP_403_FORBIDDEN
