'use strict';

angular.module('myApp.contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: 'pages/contact.html',
    controller: 'contactCtrl'
  });
}])

.controller('contactCtrl', [function() {

	

}]);