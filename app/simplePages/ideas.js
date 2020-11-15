'use strict';

angular.module('myApp.ideas', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ideas', {
    templateUrl: 'simplePages/ideas.html',
    controller: 'ideasCtrl'
  });
}])
.controller('ideasCtrl', [function() {
}]);