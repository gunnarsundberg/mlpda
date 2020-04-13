# mlpda
Web application for machine learning-assisted diagnosis of pneumonia using x-ray images.


# How to use

In order to run this application you will need to have Docker installed.
If you don't have Docker installed, you can install it here: https://docs.docker.com/get-docker/

## Download the source code

The first step to using this application is to download the source code. You can either download straight from GitHub or if you have Git installed run:

`git clone https://github.com/gunnarsundberg/mlpda.git`

## Build the Docker Image

In our application we prepopulate our Users database with a test user so that it is easy to jump right in and see how the application works. We have included build arguments into our Dockerfile that allows you to pass in your own username and password for the test user. You can also use the default test user we create if those build arguments aren't passed.

Default test user credentials (username, password): testusername, testpassword

For the examples we will be naming our Docker image *mlpda_app*

### With Build Arguments

The following command will build the Docker image with the test user username as 'Tester' and password as 'SecurePassword'.

`docker build --build-arg username="Tester" --build-arg password="SecurePassword" -t mlpda_app /path/to/source_folder`

### Without Build Arguments

The following command will build the Docker image with the default test user credentials.

`docker build -t mlpda_app /path/to/source_folder`

## Run the Docker Image

In our Dockerfile we expose the container's port 8000, the following command will connect your port 8000 to the Docker container's port 8000. This allows you to go to http://localhost:8000/ and view the running application. 

`docker run -it -p 8000:8000 mlpda_app`