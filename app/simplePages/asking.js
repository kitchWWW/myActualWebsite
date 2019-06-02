'use strict';

angular.module('myApp.asking', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/asking', {
    templateUrl: 'simplePages/asking.html',
    controller: 'askingCtrl'
  });
}])

.controller('askingCtrl', [function() {

	

}]);