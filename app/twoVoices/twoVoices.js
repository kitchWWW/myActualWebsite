'use strict';

angular.module('myApp.twoVoices', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/twoVoices', {
    templateUrl: 'twoVoices/twoVoices.html',
    controller: 'twoVoicesCtrl'
  });
}])

.controller('twoVoicesCtrl', [function() {

	

}]);