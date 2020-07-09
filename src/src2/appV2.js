
const http = require("http");

const host = 'localhost';
const port = 8000;

const GitHub = JSON.stringify(
    { username: "GitHub", text: "Notify by Git"} 
);

const Slack = JSON.stringify(
    { username: "Slack", text: "Notify by Slack"} 
);

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    switch(req.url)
    {
        case "/GitHub":
            res.writeHead(200);
            res.end(GitHub);
            break
        case "/Slack":
            res.writeHead(200);
            res.end(Slack);
            break
        default:
            res.writeHead(404);
            res.end(JSON.stringify({Name:"Hello World !!!"}));        
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});


/*
    curl http://localhost:8000/GitHub
*/