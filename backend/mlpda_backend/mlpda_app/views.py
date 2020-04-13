from django.shortcuts import render
from rest_framework.exceptions import ParseError
from rest_framework.parsers import FileUploadParser, MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from mlpda_app.serializers import PredictionSerializer
from PIL import Image
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes

from mlpda_app.predict import predict

class ImageUploadParser(FileUploadParser):
    media_type = 'image/*'

class MyUploadView(APIView):
   # permission_classes = [IsAuthenticated]
    parser_classes = (ImageUploadParser, MultiPartParser, FormParser)

    @permission_classes([IsAuthenticated])
    def post(self, request):
        if 'file' not in request.data:
            raise ParseError("Empty content")

        image_file = request.data['file'].read()
        
        mydata = [{"prediction": predict(image_file),},]
        return Response(mydata, headers={'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers':'Authorization, Origin, X-Requested-With, Content-Type, Accept'})

    def options(self, request, *args, **kwargs):
        return Response(headers={'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers':'Authorization, Origin, X-Requested-With, Content-Type, Accept'})


class CustomAuthView(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data, context={'request':request})
        serializer.is_valid(raise_exception=True)

        user = serializer.validated_data['user']

        token, created = Token.objects.get_or_create(user=user)

        return Response({
            'token': token.key
        },  headers={'Access-Control-Allow-Origin':'*'})

    def options(self, request, *args, **kwargs):
        return Response(headers={'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept'})