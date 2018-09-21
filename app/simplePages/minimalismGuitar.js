'use strict';

angular.module('myApp.minimalismGuitar', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/minimalismGuitar', {
    templateUrl: 'simplePages/minimalismGuitar.html',
    controller: 'minimalismGuitarCtrl'
  });
}])

.controller('minimalismGuitarCtrl', [function() {

	

}]);