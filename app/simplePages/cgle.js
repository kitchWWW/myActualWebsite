'use strict';

angular.module('myApp.cgle', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cgle', {
    templateUrl: 'simplePages/cgle.html',
    controller: 'cgleCtrl'
  });
}])

.controller('cgleCtrl', [function() {

	

}]);