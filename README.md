# ExcuseGenerator

This is a frontend Angular static app for an Excuse Generator. The backend is a separate Python project available at [https://github.com/jdmartens/excuse_generator_api](https://github.com/jdmartens/excuse_generator_api).

## Development server

To start a local development server, install:
```bash
npm install
```

then run:
```bash
ng serve
```
Once the server is running, open your browser and navigate to http://localhost:4200/. The application will automatically reload whenever you modify any of the source files.


## Building and Deploying to Kubernetes (Minikube)

### Prerequisites
- Docker
- Minikube or kubernetes cluster
- kubectl
  
### Steps
1. Build the Docker image:
```bash
eval $(minikube docker-env)
docker build -t excuse_generator_ng:image_tag .
```

2. Update Image/tag in deployment.yaml
3. Apply the Kubernetes deployment:
```bash
kubectl apply -f deployment.yaml
```
4. Access the application:
```bash
minikube service excuse-generator-ng-service
```
This will open the service in your default web browser.

