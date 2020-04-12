'use strict';

angular.module('myApp.departure', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/departure', {
    templateUrl: 'simplePages/departure.html',
    controller: 'departureCtrl'
  });
}])

.controller('departureCtrl', [ '$scope','$location', function($scope,$location) {

}]);

