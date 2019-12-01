'use strict';

angular.module('myApp.alabama', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/alabama', {
    templateUrl: 'alabama/alabama.html',
    controller: 'alabamaCtrl'
  });
}])

.controller('alabamaCtrl', [function() {

	

}]);