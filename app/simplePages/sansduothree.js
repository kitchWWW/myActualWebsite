'use strict';

angular.module('myApp.sansduothree', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sansduothree', {
    templateUrl: 'simplePages/sansduothree.html',
    controller: 'sansduothreeCtrl'
  });
}])

.controller('sansduothreeCtrl', [function() {

	

}]);