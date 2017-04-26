var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.statusCode = 302;
  res.setHeader('Location', 'http://stephenleighjewelers.com');
  res.end();
});

app.listen(80, function () {
  console.log('Example app listening on port 80!')
});