var express = require('express');
var app = express();

// Our static stuff
app.use(express.static('public'));

app.listen(8080, function () {
  console.log('Mandaten-site listening on port 8080!');
});