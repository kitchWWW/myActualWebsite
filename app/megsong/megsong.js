'use strict';

angular.module('myApp.megsong', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/megsong', {
    templateUrl: 'megsong/megsong.html',
    controller: 'megsongCtrl'
  });
}])

.controller('megsongCtrl', [function() {

	

}]);