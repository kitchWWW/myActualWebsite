'use strict';

angular.module('myApp.earTraining', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/earTraining', {
    templateUrl: 'simplePages/earTraining.html',
    controller: 'earTrainingCtrl'
  });
}])

.controller('earTrainingCtrl', [function() {

	

}]);