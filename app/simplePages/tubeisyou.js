'use strict';

angular.module('myApp.tubeisyou', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tubeisyou', {
    templateUrl: 'simplePages/tubeisyou.html',
    controller: 'tubeisyouCtrl'
  });
}])

.controller('tubeisyouCtrl', [function() {

	

}]);