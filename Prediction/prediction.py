import tensorflow as tf
import cv2
import numpy as np

# prediction.py module
# Written by Bryce Palmer
# Date: 4/9/2020
# This module was made for easy use of the machine learning model


def predict_from_encoded_string(encoded_string, model_path, run_debug=False):
    '''This function is used to predict an image from an opencv encoded string. 
    It will return the prediction results.
    PARAMETERS:
    encoded_string TYPE:STRING
    DESCRIPTION: The encoded_string parameter is the encoded image string to decode
    model_path TYPE:STRING
    DESCRIPTION: The model_path parameter is the path to the ML model h5 file.
    run_debug TYPE:BOOLEAN DEFAULT:False
    DESCRIPTION: Boolean that will run the function as verbose if set to True.

    RETURNS:
    prediction_results TYPE:STRING
    DESCRIPTION: A string containing the prediction results
    '''
    #Create a labels dictionary based on the values the model could return.
    label_dict = {0: "NORMAL", 1: "PNEUMONIA"}

    if run_debug:
        print("Converting encoded image data to uint8")
    #Convert string of image data to uint8
    np_string = np.fromstring(encoded_string, np.uint8)

    if run_debug:
        print("Decoding Image")
    #Decode the image
    img = cv2.imdecode(np_string, cv2.IMREAD_GRAYSCALE)

    if run_debug:
        print("Resizing Image to (256,256) ")
    #Resize the image
    img = cv2.resize(img, (256,256))

    if run_debug:
        print("Current Image Shape {}".format(img.shape))
    #Ensure that it matches the input necessary for the model
    if img.shape == (256,256):
        if run_debug:
            print("Expanding dims")
        img = np.expand_dims(img, 2);
        img = np.expand_dims(img,0)

    if run_debug:
        print("Current Image Shape {}".format(img.shape))

    if run_debug:
        print("Getting Model from {}".format(model_path))
    #Pull the model from the h5 file
    model = tf.keras.models.load_model(model_path)

    if run_debug:
        print("Making prediction")
    #Predict the image
    prediction = model.predict(img)[0]

    if run_debug:
        print("Prediction: {}".format(prediction))

    #Get the predicted class
    pred_value = np.argmax(prediction)

    if run_debug:
        print("Predicted state as {}".format(label_dict[pred_value]))

    #Parse the prediction results
    return "{} - {:.2f}% Confident".format(label_dict[pred_value], prediction[pred_value] * 100)


def predict_from_image(image, model_path, run_debug=False):
    '''This function is used to predict an image from an opencv encoded string. 
    It will return the prediction results.
    PARAMETERS:
    image TYPE:IMAGE
    DESCRIPTION: The image parameter is the image you want classified
    model_path TYPE:STRING
    DESCRIPTION: The model_path parameter is the path to the ML model h5 file.
    run_debug TYPE:BOOLEAN DEFAULT:False
    DESCRIPTION: Boolean that will run the function as verbose if set to True.

    RETURNS:
    prediction_results TYPE:STRING
    DESCRIPTION: A string containing the prediction results
    '''
       #Create a labels dictionary based on the values the model could return.
    label_dict = {0: "NORMAL", 1: "PNEUMONIA"}

    if run_debug:
        print("Resizing Image to (256,256) ")
    #Resize the image
    img = cv2.resize(image, (256,256))

    if run_debug:
        print("Current Image Shape {}".format(img.shape))
    #Ensure that it matches the input necessary for the model
    if img.shape == (256,256):
        if run_debug:
            print("Expanding dims")
        img = np.expand_dims(img, 2);
        img = np.expand_dims(img,0)

    if run_debug:
        print("Current Image Shape {}".format(img.shape))

    if run_debug:
        print("Getting Model from {}".format(model_path))
    #Pull the model from the h5 file
    model = tf.keras.models.load_model(model_path)

    if run_debug:
        print("Making prediction")
    #Predict the image
    prediction = model.predict(img)[0]

    if run_debug:
        print("Prediction: {}".format(prediction))

    #Get the predicted class
    pred_value = np.argmax(prediction)

    if run_debug:
        print("Predicted state as {}".format(label_dict[pred_value]))

    #Parse the prediction results
    return "{} - {:.2f}% Confident".format(label_dict[pred_value], prediction[pred_value] * 100)