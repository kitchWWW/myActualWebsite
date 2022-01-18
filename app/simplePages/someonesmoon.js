'use strict';

angular.module('myApp.someonesmoon', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/someonesmoon', {
    templateUrl: 'simplePages/someonesmoon.html',
    controller: 'someonesmoonCtrl'
  });
}])

.controller('someonesmoonCtrl', [function() {

	

}]);