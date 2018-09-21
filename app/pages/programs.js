'use strict';

angular.module('myApp.programs', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/programs', {
    templateUrl: 'pages/programs.html',
    controller: 'programsCtrl'
  });
}])

.controller('programsCtrl', [function() {

	

}]);