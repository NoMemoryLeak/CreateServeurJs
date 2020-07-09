## Trigger App

### Description
Create and launch server thanks to node.js

- src1 : launch server and pull JSON object in commande line thanks to curl 

- src2 : laucnh server and pull JSON object thanks to curl 

- dockerapp : Dowload docker to container and use the app

### Install

```
    sudo npm install node
    sudo npm install -g require
```

### Usages

#### Src
```
    npm install
    <path>/node app.js
```
##### launch src1
```
    curl -i -X POST -H 'Content-Type: application/json' -d '{your JSON}' http://127.0.0.1:8080
```
##### launch src2
```
    curl http://localhost:8000/GitHub
```

#### Docker
```
    Docker build -t <your username>/web-app
```
Important: Dockerfile should be in the root of the repo
```
    docker images
```
check the creation of your image
```
    docker run 3000:8080 -d <your username>/web-app
    curl -i localhost:3000
```
### Support

We would love your feedback on this tool so don't hesitate to let us know what is wrong and how we could improve it, just file an [issue](https://github.com/NoMemoryLeak/create-serveur-js/issues/new)

### Code of Conduct

This plugin is by no means part of [CNCF](https://www.cncf.io/) but we abide by its [code of conduct](https://github.com/cncf/foundation/blob/master/code-of-conduct.md)
