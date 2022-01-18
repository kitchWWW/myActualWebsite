'use strict';

angular.module('myApp.ambientdulcimer', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ambientdulcimer', {
    templateUrl: 'simplePages/ambientdulcimer.html',
    controller: 'ambientdulcimerCtrl'
  });
}])

.controller('ambientdulcimerCtrl', [function() {

	

}]);