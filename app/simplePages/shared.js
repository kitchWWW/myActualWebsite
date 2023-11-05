'use strict';

angular.module('myApp.shared', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/shared', {
      templateUrl: 'simplePages/shared.html',
      controller: 'sharedCtrl'
    });
  }])

  .controller('sharedCtrl', [function() {}]);