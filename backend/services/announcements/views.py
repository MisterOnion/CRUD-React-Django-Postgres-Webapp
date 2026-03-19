from django.shortcuts import render

from rest_framework import viewsets
from .models import AnnouncementList
from .serializers import AnnouncementSerializer

# Create your views here.

class AnnouncementViewSet(viewsets.ModelViewSet):
    queryset = AnnouncementList.objects.all().order_by('announcement_id')
    serializer_class = AnnouncementSerializer
