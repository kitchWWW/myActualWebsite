'use strict';

angular.module('myApp.m4a', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/m4a', {
    templateUrl: 'simplePages/m4a.html',
    controller: 'm4aCtrl'
  });
}])

.controller('m4aCtrl', [function() {

	

}]);