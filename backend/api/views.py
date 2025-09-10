from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from .models import NotesModel
from django.contrib.auth.models import User
from .serializers import UserSerializer, NotesSerializer


class RegistrationView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]



class NotesView(generics.ListCreateAPIView):
    serializer_class = NotesSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return NotesModel.objects.filter(name=self.request.user)

    def perform_create(self, serializer):
        serializer.save(name=self.request.user)



class NotesDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = NotesSerializer
    permission_classes = [IsAuthenticated]
    lookup_field = 'pk'

    def get_queryset(self):
        return NotesModel.objects.filter(name=self.request.user)
