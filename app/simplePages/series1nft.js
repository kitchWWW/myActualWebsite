'use strict';

angular.module('myApp.series1nft', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/series1nft', {
    templateUrl: 'simplePages/series1nft.html',
    controller: 'series1nftCtrl'
  });
}])

.controller('series1nftCtrl', [function() {

	

}]);