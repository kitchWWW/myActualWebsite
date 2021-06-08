'use strict';

angular.module('myApp.whisper', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/whisper', {
    templateUrl: 'simplePages/whisper.html',
    controller: 'whisperCtrl'
  });
}])

.controller('whisperCtrl', [function() {

	

}]);