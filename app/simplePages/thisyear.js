'use strict';

angular.module('myApp.thisyear', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/thisyear', {
    templateUrl: 'simplePages/thisyear.html',
    controller: 'thisyearCtrl'
  });
}])

.controller('thisyearCtrl', [function() {

	

}]);