'use strict';

angular.module('myApp.nimb', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/nimb', {
    templateUrl: 'simplePages/nimb.html',
    controller: 'nimbCtrl'
  });
}]).controller('nimbCtrl', [function() {}]);