'use strict';

angular.module('myApp.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'pages/about.html',
    controller: 'aboutCtrl'
  });
}])

.controller('aboutCtrl', [function() {

	

}]);