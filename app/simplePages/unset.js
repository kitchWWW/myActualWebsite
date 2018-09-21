'use strict';

angular.module('myApp.unset', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/unset', {
    templateUrl: 'simplePages/unset.html',
    controller: 'unsetCtrl'
  });
}])

.controller('unsetCtrl', [function() {

	

}]);