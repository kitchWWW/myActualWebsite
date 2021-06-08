'use strict';

angular.module('myApp.paperandpen', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/paperandpen', {
    templateUrl: 'simplePages/paperandpen.html',
    controller: 'paperandpenCtrl'
  });
}])

.controller('paperandpenCtrl', [function() {

	

}]);