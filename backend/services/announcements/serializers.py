from rest_framework import serializers
from .models import AnnouncementList

# convert data structures into standard formats like JSON or XML, easy to transmit over a network 
class AnnouncementSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnnouncementList
        fields = '__all__'

