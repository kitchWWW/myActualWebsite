'use strict';

angular.module('myApp.playground', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/playground', {
    templateUrl: 'simplePages/playground.html',
    controller: 'playgroundCtrl'
  });
}])

.controller('playgroundCtrl', [function() {

	

}]);