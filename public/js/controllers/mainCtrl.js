angular.module('app')
  .controller('mainCtrl', function ($scope, $http) {

$scope.test = 'again';

$scope.getTasks = function () {
  $http.get('http://localhost:3000/todo').then(
    function (response) {
      console.log(response.data);
      $scope.todoItems=response.data;
    }
  )
}

$scope.getTasks();

$scope.postTask = function (newTask) {

  var task = {
    task: newTask,
    complete: false
  }
  $http({
    method: 'POST',
    url: 'http://localhost:3000/todo',
    data: task
  }).then(
    function (response) {
      console.log(response.data);
      $scope.todoItems=response.data;
      $scope.getTasks();
    }
  )
}

$scope.delTask = function(todo){
  $http({
    method: 'DELETE',
    url: 'http://localhost:3000/todo/' + todo
  }).then(
    function (response) {
      console.log(response.data);
      $scope.todoItems=response.data;
      $scope.getTasks();
    }
  )
}


  })
