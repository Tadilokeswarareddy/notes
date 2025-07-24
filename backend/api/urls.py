from django.urls import path
from .views import UserViews,UserDetailViews,NotesDetailView,NotesView
urlpatterns = [
    path('user/',UserViews.as_view()),
    path('user/<int:pk>/',UserDetailViews.as_view()),
    path('notes/',NotesView.as_view()),
    path('notes/<int:pk>/,',NotesDetailView.as_view())
]