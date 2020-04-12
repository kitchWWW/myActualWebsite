'use strict';

angular.module('myApp.eeg', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/eeg', {
    templateUrl: 'simplePages/eeg.html',
    controller: 'eegCtrl'
  });
}])

.controller('eegCtrl', [function() {

	

}]);