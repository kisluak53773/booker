from rest_framework_nested import routers
from core.auth.viewsets import LoginViewSet, RegisterViewSet, RefreshViewSet
from core.user.viewsets import UserViewSet
from core.publisher.viewsets import PublisherViewSet
from core.book.viewsets import BookViewSet
from core.review.viewsets import ReviewViewSet
from core.genre.viewsets import GenreViewSet

router = routers.SimpleRouter()

router.register(r'user', UserViewSet, basename='user')
router.register(r'auth/login', LoginViewSet, basename='auth-login')
router.register(r'auth/register', RegisterViewSet, basename='auth-register')
router.register(r'auth/refresh', RefreshViewSet, basename='auth-refresh')
router.register(r'book', BookViewSet, basename='book')
router.register(r'publisher', PublisherViewSet, basename='publisher')
router.register(r'review', ReviewViewSet, basename='review')
router.register(r'genre', GenreViewSet, basename='genre')

urlpatterns = [*router.urls]
