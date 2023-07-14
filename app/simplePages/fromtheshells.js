'use strict';

angular.module('myApp.fromtheshells', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/fromtheshells', {
    templateUrl: 'simplePages/fromtheshells.html',
    controller: 'fromtheshellsCtrl'
  });
}])

.controller('fromtheshellsCtrl', [function() {

	

}]);