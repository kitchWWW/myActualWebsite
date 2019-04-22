'use strict';

angular.module('myApp.pan', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pan/:preBuilt?', {
    templateUrl: 'pan/pan.html',
    controller: 'panCtrl'
  });
}])

.controller('panCtrl', [ '$scope','$location','$http','$routeParams','$rootScope',
  function($scope,$location,$http,$routeParams,$rootScope) {

  if(Boolean($routeParams.preBuilt) && ($rootScope.data != null)){
    $scope.data = $rootScope.data;
  }else{
    $scope.data = {};
    $scope.data.TIMESTAMP;
    $scope.data.KEY = '55';
    $scope.isLoading = false;
  }

  $scope.buttonMessage = "Make A Sonata!"

  $scope.goSon = function(){
        var d = new Date();
        var n = d.getTime();
        $scope.buttonMessage = "Loading Piece..."
        $scope.isLoading = true;
        $scope.data.TIMESTAMP = n;
        $rootScope.data = {};
        $rootScope.data = $scope.data;
        console.log($rootScope.data);
        $http({
          method: 'POST',
          url: '/goPan',
          data: $scope.data
        }).then(function successCallback(response) {
            $location.url('/panView/'+response.data);
          }, function errorCallback(response) {
            console.log(response);
          });
    }
	$scope.toString = function(note){
    	if(note==undefined){
    		return 'not a note'
    	}
      var notes = ['C','C#','D','Eb','E','F','F#','G','Ab','A','Bb','B']
      return notes[note%12]+''+Math.floor(note/12);
    };

}]);