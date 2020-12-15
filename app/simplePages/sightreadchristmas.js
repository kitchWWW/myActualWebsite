'use strict';

angular.module('myApp.sightreadchristmas', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sightreadchristmas', {
    templateUrl: 'simplePages/sightreadchristmas.html',
    controller: 'sightreadchristmasCtrl'
  });
}])

.controller('sightreadchristmasCtrl', [function() {

	

}]);