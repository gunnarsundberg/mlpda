from django.shortcuts import render
from rest_framework.exceptions import ParseError
from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from mlpda_app.serializers import PredictionSerializer
from PIL import Image

from mlpda_app.predict import predict

class ImageUploadParser(FileUploadParser):
    media_type = 'image/*'

class MyUploadView(APIView):
    permission_classes = [IsAuthenticated]
    parser_class = [ImageUploadParser]

    def post(self, request):
        if 'file' not in request.data:
            raise ParseError("Empty content")

        image_file = request.data['file']

        try:
            file_type_test = Image.open(image_file)
            file_type_test.verify()
        except:
            raise ParseError("Unsupported image type")
        
        #prediction = predict(f)
        mydata = [{"prediction": predict(image_file),},]
        results = PredictionSerializer(mydata, many=True).data
        return Response(results)
