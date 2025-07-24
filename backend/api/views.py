from django.shortcuts import render
from rest_framework import generics
from django.contrib.auth.models import User
from . serialization import UserSerializer,NotesSerializer
from .models import Notes
# Create your views here.

class UserViews(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetailViews(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'pk'

class NotesView(generics.ListCreateAPIView):
    queryset = Notes.objects.all()
    serializer_class = NotesSerializer

class NotesDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Notes.objects.all()
    serializer_class = NotesSerializer
    lookup_field = 'pk' 