# ExcuseGenerator

This is a frontend Angular static app for an Excuse Generator. The backend is a separate Python project available at [https://github.com/jdmartens/excuse_generator_api](https://github.com/jdmartens/excuse_generator_api).

## Development server

To start a local development server - 

install:
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