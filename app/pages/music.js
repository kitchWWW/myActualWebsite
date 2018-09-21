'use strict';

angular.module('myApp.music', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/music', {
    templateUrl: 'pages/music.html',
    controller: 'musicCtrl'
  });
}])

.controller('musicCtrl', [function() {

	

}]);