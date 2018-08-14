var express = require('express');
var path = require('path');
var app = express();
 
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res) {
    res.sendfile("./public/index.html");
  });
app.listen(8090, function() {
 console.log('App listening at port 8090;');
});