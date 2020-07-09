## Lauchn app1
```
    npm install
    npm install require
    Docker build -t <your username>/web-app
```
Important: Dockerfile should be in the root of the repo

```
    docker images
```
Check the creation of your image
```
    docker run 3000:8080 -d <your username>/web-app

```

```
curl -i localhost:3000
```
Answer "Hello world"
