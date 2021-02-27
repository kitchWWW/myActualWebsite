'use strict';

angular.module('myApp.breaking', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/breaking', {
    templateUrl: 'simplePages/breaking.html',
    controller: 'breakingCtrl'
  });
}])

.controller('breakingCtrl', [function() {

	

}]);