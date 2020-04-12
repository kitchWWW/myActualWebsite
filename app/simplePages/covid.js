'use strict';

angular.module('myApp.covid', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/covid', {
    templateUrl: 'simplePages/covid.html',
    controller: 'covidCtrl'
  });
}])

.controller('covidCtrl', [function() {

	

}]);