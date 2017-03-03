var express = require('express');
var bodyParser = require('body-parser');
var mainCtrl = require('./mainCtrl.js');
var app = express();


app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

app.post('/todo', mainCtrl.addTodo);
app.get('/todo', mainCtrl.getTodo);
app.put('/completetodo/:id', mainCtrl.completeTodo);
app.put('/uncompletetodo/:id', mainCtrl.uncompleteTodo);
app.delete('/todo/:id', mainCtrl.deleteTodo);


var port = 3000;
app.listen(port, function() {
  console.log('listening ' + port);
});
