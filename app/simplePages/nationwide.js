'use strict';

angular.module('myApp.nationwide', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/nationwide', {
    templateUrl: 'simplePages/nationwide.html',
    controller: 'nationwideCtrl'
  });
}])

.controller('nationwideCtrl', [function() {
}]);