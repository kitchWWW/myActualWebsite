'use strict';

angular.module('myApp.zfest', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/zfest', {
    templateUrl: 'simplePages/zfest.html',
    controller: 'zfestCtrl'
  });
}])

.controller('zfestCtrl', [function() {

	

}]);