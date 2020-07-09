### Lauchn app2-beta

```
npm install
npm install require
docker build -t <your username>/web-app
```
Important: Dockerfile should be in the root of the repo

```
docker run 3000:8080 -d <your username>/web-app
```

- Open docker and start your app 

- http://localhost:3000/?message=<your-message>
   - answer: Your message is : <your-message>

The app has created a JSON file with <your-message>