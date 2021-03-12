//test
'use strict';

const express = require('express');

// Constants
const PORT = '8080';
const HOST = '127.0.0.1';

// App
var app = express();
app.use(express.json());

app.post('/', (req, res) => {
    console.log(req.body);   // your JSON
    res.send(req.body);      // echo the result back
});


app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);


/*
curl -i -X POST -H 'Content-Type: application/json' -d '{"name":"somename","year":"2050"}' http://127.0.0.1:8080
*/