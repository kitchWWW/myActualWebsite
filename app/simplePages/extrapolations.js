'use strict';

angular.module('myApp.extrapolations', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/extrapolations', {
    templateUrl: 'simplePages/extrapolations.html',
    controller: 'extrapolationsCtrl'
  });
}])

.controller('extrapolationsCtrl', [function() {

	

}]);