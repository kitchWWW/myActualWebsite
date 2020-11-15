'use strict';

angular.module('myApp.wildthings', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/wildthings', {
    templateUrl: 'simplePages/wildthings.html',
    controller: 'wildthingsCtrl'
  });
}])

.controller('wildthingsCtrl', [function() {

	

}]);