var express = require('express');
var path = require('path');
var app = express();
 
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res) {
    console.log("index")
    res.sendfile(__dirname + "/public/index.html");
  });
app.get('/detail', function(req, res) {
    console.log("detail")
    res.sendfile(__dirname + "/public/detail.html");
  });
app.get('/test', function(req, res) {
    console.log("detail")
    res.sendfile(__dirname + "/public/test.html");
  });
app.listen(8099, function() {
 console.log('App listening at port 8099!!!!!;');
});