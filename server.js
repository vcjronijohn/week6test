var http = require("http");
var url = require('url');
var fs = require("fs");

exports.server = function () {
	http.createServer(function (request, response) {

		// var parUrl = url.parse(request.url, true, request.username, request.password);
		// var parUrl = url.parse(request.url, true);
		var parUrl = url.parse(request.url, true);
		var filePath = '.' + parUrl.pathname;

		// if (filePath === "login") {
		if (parUrl.pathname === "./login") {
		// if (parUrl.pathname === "/authenticate") {
			var username = parUrl.username;
			var password = parUrl.password;
			// var username = parUrl.query.username;
			// var password = parUrl.query.password;
			var res = "Access Denied";
			
			var db = fs.readFileSync("./db.txt").toString();
			var users = db.split("\n");

			var authenticated = 0;

			users.forEach(function(user) {
				var dbusername = user.split(",")[0];
				var dbpassword = user.split(",")[1];

				if(username === dbusername) {
					if(password === dbpassword) {
						authenticated = 1;
					}
				}
			});

			if(authenticated) res = "Authenticated";
			console.log(db);
			response.writeHead(200, { 'Content-Type': "text/plain" });
			response.end(res);
			return;
		}
	
    if (filePath == './') {
        filePath = './index.html';
		} else {
			filePath += ".html";
		}

		console.log('request ', request.url);

		fs.readFile(filePath, function (err, content) {
		
			if(request.url === "/" || request.url === "/login") {
				response.writeHead(200, { 'Content-Type': "text/html" });
				response.end(content, 'utf-8');

			} else {
				fs.readFile('./404.html', function(error, content) {
					response.writeHead(404, { 'Content-Type': "text/html" });
					response.end(content, 'utf-8');
				});
			}
		})
	})
		.listen(8080, function () {
			console.log("Listening on Port: "+ 8080);
		});
}

