'use strict';

angular.module('myApp.songCycle', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/songCycle', {
    templateUrl: 'songCycle/songCycle.html',
    controller: 'songCycleCtrl'
  });
}])

.controller('songCycleCtrl', ['$scope', function($scope) {

	

}]);