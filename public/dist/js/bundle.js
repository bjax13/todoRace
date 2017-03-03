'use strict';

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    templateUrl: './views/home.html',
    controller: 'mainCtrl'
  }).state('about', {
    url: '/about',
    templateUrl: './views/about.html'
  }).state('other', {
    url: '/other',
    templateUrl: './views/other.html'
  });
});
'use strict';

angular.module('app').controller('mainCtrl', function ($scope, $http) {

  $scope.test = 'again';

  $scope.getTasks = function () {
    $http.get('http://localhost:3000/todo').then(function (response) {
      console.log(response.data);
      $scope.todoItems = response.data;
    });
  };

  $scope.getTasks();

  $scope.postTask = function (newTask) {

    var task = {
      task: newTask,
      complete: false
    };
    $http({
      method: 'POST',
      url: 'http://localhost:3000/todo',
      data: task
    }).then(function (response) {
      console.log(response.data);
      $scope.todoItems = response.data;
      $scope.getTasks();
    });
  };
});
'use strict';

angular.module('app').directive('navy', function () {
  return {
    restrict: 'E',
    templateUrl: "../views/navTpl.html"
  };
});
//# sourceMappingURL=bundle.js.map
