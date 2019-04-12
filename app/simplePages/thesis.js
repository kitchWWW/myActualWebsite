'use strict';

angular.module('myApp.thesis', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/thesis', {
    templateUrl: 'simplePages/thesis.html',
    controller: 'thesisCtrl'
  });
}])

.controller('thesisCtrl', [function() {

	

}]);