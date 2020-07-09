var http = require('http');
var url = require('url');
var querystring = require('querystring');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    var params = querystring.parse(url.parse(req.url).query);
    res.writeHead(200, {"Content-Type": "text/plain"});
    if ('message' in params) {
        res.write('Your message is : ' + params['message']);
        /*Creation Objet JSON en fonction des param URL */
        var messagehook = {
		   message: params['message'],
		};
		var donnees = JSON.stringify(messagehook);
		fs.writeFileSync('TeamsWebHook.json', donnees);
    }
    else {
        res.write("Default Message : Hello World !");
    }
    res.end();
});


server.listen(8080);
