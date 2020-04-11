from django.conf import settings
from mlpda_app.models import User
from django.core.management.base import BaseCommand

class Command(BaseCommand):
    
    def handle(self, *args, **kwargs):
        user = User.objects.create_user('reaganiscool@gmail.com', 'gracecityshuffleclub')
        user.save()