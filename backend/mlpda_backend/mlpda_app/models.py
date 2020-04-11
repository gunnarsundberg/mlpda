# Default import
from django.db import models

# django rest framework token authentication imports
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

# User model imports
from custom_user.models import AbstractEmailUser

class User(AbstractEmailUser):
    """
    Example of an EmailUser with a new field date_of_birth
    """
    pass

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)