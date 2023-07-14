'use strict';

angular.module('myApp.chinatown', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/chinatown', {
    templateUrl: 'simplePages/chinatown.html',
    controller: 'chinatownCtrl'
  });
}])

.controller('chinatownCtrl', [function() {

	

}]);