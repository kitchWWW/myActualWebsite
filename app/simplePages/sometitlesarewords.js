'use strict';

angular.module('myApp.sometitlesarewords', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sometitlesarewords', {
    templateUrl: 'simplePages/sometitlesarewords.html',
    controller: 'sometitlesarewordsCtrl'
  });
}])

.controller('sometitlesarewordsCtrl', [function() {

	

}]);