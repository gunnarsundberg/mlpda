from django.contrib import admin
from django.urls import path
from django.conf.urls import url

from rest_framework.authtoken import views
import mlpda_app.views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    
]

urlpatterns += [
    url(r'^auth/', views.obtain_auth_token),
    url(r'^predict/', mlpda_app.views.MyUploadView.as_view())
]