import pytest
from core.fixture.book import book
from core.fixture.user import user, another_user, superuser
from core.fixture.publisher import publisher
from core.fixture.review import review
from rest_framework import status


class TestReviewViewSet:
    endpoint = '/api/review/'

    def test_list(self, client, user, book, publisher, review):
        response = client.get(self.endpoint)
        assert response.status_code == status.HTTP_200_OK
        assert response.data['count'] == 1

    def test_retrive(self, client, user, book, publisher, review):
        response = client.get(self.endpoint+str(review.id)+'/')
        assert response.status_code == status.HTTP_200_OK
        assert response.data['id'] == review.id
        assert response.data['title'] == review.title
        assert response.data['body'] == review.body
        assert response.data['author'] == review.author.id
        assert response.data['book'] == review.book.id

    def test_create(self, client, user, book, publisher):
        client.force_authenticate(user=user)
        data = {
            'title': 'some title',
            'body': 'some body',
            'author': user.id,
            'book': book.id,
        }
        response = client.post(self.endpoint, data)
        assert response.status_code == status.HTTP_201_CREATED
        assert response.data['title'] == data['title']
        assert response.data['body'] == data['body']
        assert response.data['author'] == data['author']
        assert response.data['book'] == data['book']

    def test_update(self, client, user, book, publisher, review):
        client.force_authenticate(user=user)
        data = {
            'title': 'some title',
            'body': 'new body',
            'author': user.id,
            'book': book.id,
        }
        response = client.put(self.endpoint+str(review.id)+'/', data)
        assert response.status_code == status.HTTP_200_OK
        assert response.data['body'] == data['body']

    def test_destroy(self, client, user, book, publisher, review):
        client.force_authenticate(user=user)
        response = client.delete(self.endpoint+str(review.id)+'/')
        assert response.status_code == status.HTTP_204_NO_CONTENT

    def test_anonymous_create(self, client, user, book, publisher):
        data = {
            'title': 'some title',
            'body': 'some body',
            'author': user.id,
            'book': book.id,
        }
        response = client.post(self.endpoint, data)
        assert response.status_code == status.HTTP_401_UNAUTHORIZED

    def test_anonymous_update(self, client, book, user, publisher, review):
        data = {
            'title': 'some title',
            'body': 'new body',
            'author': user.id,
            'book': book.id,
        }
        response = client.put(self.endpoint+str(review.id)+'/', data)
        assert response.status_code == status.HTTP_401_UNAUTHORIZED

    def test_anonymous_destroy(self, client, book, publisher, review):
        response = client.delete(self.endpoint+str(review.id)+'/')
        assert response.status_code == status.HTTP_401_UNAUTHORIZED

    def test_random_user_update(self, client, book, user, another_user, publisher, review):
        client.force_authenticate(user=another_user)
        data = {
            'title': 'some title',
            'body': 'new body',
            'author': user.id,
            'book': book.id,
        }
        response = client.put(self.endpoint+str(review.id)+'/', data)
        assert response.status_code == status.HTTP_403_FORBIDDEN

    def test_random_user_destroy(self, client, book, another_user, publisher, review):
        client.force_authenticate(user=another_user)
        response = client.delete(self.endpoint+str(review.id)+'/')
        assert response.status_code == status.HTTP_403_FORBIDDEN
