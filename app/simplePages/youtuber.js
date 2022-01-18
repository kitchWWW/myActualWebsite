'use strict';

angular.module('myApp.youtuber', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/youtuber', {
    templateUrl: 'simplePages/youtuber.html',
    controller: 'youtuberCtrl'
  });
}])

.controller('youtuberCtrl', [function() {

	

}]);