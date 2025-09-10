from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from django.urls import path
from .views import RegistrationView,NotesView,NotesDetailView

urlpatterns = [
    
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('registration/',RegistrationView.as_view()),
    path('notes/',NotesView.as_view()),
    path('notes/<int:pk>/',NotesDetailView.as_view()),
    
]
