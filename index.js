var express = require('express');
var port = 4000;

var app = express();

app.get("/", function(request, response){
	response.send("hello jag!");
})

app.listen(port);