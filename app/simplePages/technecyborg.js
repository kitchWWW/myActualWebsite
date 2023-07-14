'use strict';

angular.module('myApp.technecyborg', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/technecyborg', {
    templateUrl: 'simplePages/technecyborg.html',
    controller: 'technecyborgCtrl'
  });
}])

.controller('technecyborgCtrl', [function() {

	

}]);