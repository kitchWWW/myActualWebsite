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
    var params = $routeParams.genSonNumber.split("---")
    if(params.length == 2){
      $scope.genSonNumber = params[0]
      $scope.maxNumb = params[1]
    }else{
      $scope.genSonNumber = params[0]+'---'+params[1]
      $scope.maxNumb = params[2]
    }
    $scope.numbers = Array.from({length: $scope.maxNumb}, (x,i) => i);

    $scope.back = function(){
      console.log('hi?');
      $location.url('/softMusic/true');  
    }
}]);

