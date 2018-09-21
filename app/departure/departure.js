'use strict';

angular.module('myApp.departure', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/departure', {
    templateUrl: 'departure/departure.html',
    controller: 'departureCtrl'
  });
}])

.controller('departureCtrl', [ '$scope','$location', function($scope,$location) {

}]);

