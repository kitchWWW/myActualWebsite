'use strict';

angular.module('myApp.sansduotwo', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sansduotwo', {
    templateUrl: 'simplePages/sansduotwo.html',
    controller: 'sansduotwoCtrl'
  });
}])

.controller('sansduotwoCtrl', [function() {

	

}]);