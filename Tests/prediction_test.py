import Prediction.prediction as pred
import cv2
import numpy as np

# This python file is used to test the prediction module

test_file = "./test_images/IM-0115-0001.jpeg"
path_model = "../MachineLearning/pneumonia_model_v2.h5"

image = cv2.imread(test_file, cv2.IMREAD_GRAYSCALE)

_, encoded_image = cv2.imencode('.jpeg', image)

encoded_image = encoded_image.tostring()

print(pred.predict_from_encoded_string(encoded_image, path_model))

print(pred.predict_from_image(image, path_model))