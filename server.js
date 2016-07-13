var express = require('express');

var index = require('./routes/index')
var olympics = require('./routes/olympics')
var app = express();


//static
app.use(express.static('public'));

//routers
app.use('/olympics', olympics);
app.use('/', index)

var server = app.listen(process.env.POST || 3000, function(){
  var port = server.address().port;
  console.log("Listening on port ", port);


});
