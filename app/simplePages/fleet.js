'use strict';

angular.module('myApp.fleet', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/fleet', {
    templateUrl: 'simplePages/fleet.html',
    controller: 'fleetCtrl'
  });
}])

.controller('fleetCtrl', [function() {

	

}]);