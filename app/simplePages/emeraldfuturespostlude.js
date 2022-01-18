'use strict';

angular.module('myApp.emeraldfuturespostlude', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/emeraldfuturespostlude', {
    templateUrl: 'simplePages/emeraldfuturespostlude.html',
    controller: 'emeraldfuturespostludeCtrl'
  });
}])

.controller('emeraldfuturespostludeCtrl', [function() {

	

}]);