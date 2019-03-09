'use strict';

angular.module('myApp.softMusicView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/softMusicView/:genSonNumber', {
    templateUrl: 'softMusic/softMusicView.html',
    controller: 'softMusicViewCtrl'
  });
}])

.controller('softMusicViewCtrl', [ '$scope','$location','$routeParams',
    function($scope,$location,$routeParams) {

    $scope.genSonNumber = $routeParams.genSonNumber.split("---")[0]
    $scope.maxNumb = $routeParams.genSonNumber.split("---")[1]
    $scope.numbers = Array.from({length: $scope.maxNumb}, (x,i) => i);
    console.log($scope.numbers)

    $scope.back = function(){
      console.log('hi?');
      $location.url('/softMusic/true');  
    }
}]);

