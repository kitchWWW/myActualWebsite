'use strict';

angular.module('myApp.planing', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/planing', {
    templateUrl: 'simplePages/planing.html',
    controller: 'planingCtrl'
  });
}])

.controller('planingCtrl', [function() {

	

}]);