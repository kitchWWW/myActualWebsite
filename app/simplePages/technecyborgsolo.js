'use strict';

angular.module('myApp.technecyborgsolo', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/technecyborgsolo', {
    templateUrl: 'simplePages/technecyborgsolo.html',
    controller: 'technecyborgsoloCtrl'
  });
}])

.controller('technecyborgsoloCtrl', [function() {

	

}]);