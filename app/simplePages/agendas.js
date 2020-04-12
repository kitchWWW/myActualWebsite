'use strict';

angular.module('myApp.agendas', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/agendas', {
    templateUrl: 'simplePages/agendas.html',
    controller: 'agendasCtrl'
  });
}])

.controller('agendasCtrl', [function() {

	

}]);