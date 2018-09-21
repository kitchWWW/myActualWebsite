'use strict';

angular.module('myApp.genMelPsy', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/genMelPsy', {
    templateUrl: 'genMel/genMelPsy.html',
    controller: 'genMelPsyCtrl'
  });
}])

.controller('genMelPsyCtrl', [function() {

    

}]);