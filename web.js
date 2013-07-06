var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	var text = fs.readFileSynch('index.html', 'utf8');
	response.send(text);
	//response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
