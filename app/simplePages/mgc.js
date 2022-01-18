'use strict';

angular.module('myApp.mgc', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/mgc', {
    templateUrl: 'simplePages/mgc.html',
    controller: 'mgcCtrl'
  });
}])

.controller('mgcCtrl', [function() {

	

}]);