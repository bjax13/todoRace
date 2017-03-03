var todos = require('./todos.js');
var uuidV4 = require('uuid/v4');

module.exports = {

  addTodo: function(req, res){
    console.log("body",req.body)
    var newTodo = {
      task: req.body.task,
      complete: req.body.complete,
      id: uuidV4()
    };
    todos.push(newTodo);
    console.log('adding todos', todos);
    res.status(200).json(todos)
  },

  getTodo: function(req, res){
    console.log('getting todos', todos);
    res.status(200).json(todos);
  },

  completeTodo: function(req, res) {
    let index = todos.findIndex(todo => todo.id === req.params.id);
    todos[index].complete = true;
    console.log('complete todos', todos);
    res.status(200).json(todos)
  },

  uncompleteTodo: function(req, res) {
    let index = todos.findIndex(todo => todo.id === req.params.id);
    console.log(index);
    todos[index].complete = false;
    console.log('uncomplete todos', todos);
    res.status(200).json(todos)
  },

  deleteTodo: function(req, res) {
    let index = todos.findIndex(todo => todo.id === req.params.id);
    todos.splice(index, 1);
    console.log('delete todos', todos);
    res.status(200).json(todos);
  }


}
