from django.conf import settings
from mlpda_app.models import User
from django.core.management.base import BaseCommand

class Command(BaseCommand):
    help = 'Create a user to test the system'

    #Adds cli arguments to the management command
    def add_arguments(self, parser):
        parser.add_argument('-u', '--username', type=str, help='Set the username of the user. If not set defaults to \'testuser\'')

        parser.add_argument('-p', '--password', type=str, help='Set the password of the user. If not set defaults to \'testpassword\'')

    def handle(self, *args, **kwargs):
        username = kwargs['username']
        password = kwargs['password']

        if not username:
            username = "testuser"
        
        if not password:
            password = "testpassword"

        user = User.objects.create_user(username, password)
        user.save()