'use strict';

angular.module('myApp.sansduoone', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sansduoone', {
    templateUrl: 'simplePages/sansduoone.html',
    controller: 'sansduooneCtrl'
  });
}])

.controller('sansduooneCtrl', [function() {

	

}]);