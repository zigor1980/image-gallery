const express = require('express');
const app = express();

app.use(express.static(__dirname + '/build'));

app.get('*', function(req, res){
  res.sendfile(__dirname + '/build/index.html');
});

const port = process.env.PORT || 5000;
app.listen(port);
