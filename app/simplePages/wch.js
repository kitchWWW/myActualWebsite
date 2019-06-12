'use strict';

angular.module('myApp.wch', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/wch', {
    templateUrl: 'simplePages/wch.html',
    controller: 'wchCtrl'
  });
}])

.controller('wchCtrl', [function() {

	

}]);