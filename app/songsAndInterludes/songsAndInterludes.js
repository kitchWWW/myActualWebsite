'use strict';

angular.module('myApp.songsAndInterludes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/songsAndInterludes', {
    templateUrl: 'songsAndInterludes/songsAndInterludes.html',
    controller: 'songsAndInterludesCtrl'
  });
}])

.controller('songsAndInterludesCtrl', [ '$scope','$location', function($scope,$location) {

}]);

