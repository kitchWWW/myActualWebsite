'use strict';

angular.module('myApp.genSon', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/genSon/:preBuilt?', {
    templateUrl: 'genSon/genSon.html',
    controller: 'genSonCtrl'
  });
}])

.controller('genSonCtrl', [ '$scope','$location','$http','$routeParams','$rootScope',
  function($scope,$location,$http,$routeParams,$rootScope) {

  if(Boolean($routeParams.preBuilt) && ($rootScope.data != null)){
    $scope.data = $rootScope.data;
  }else{
    $scope.data = {};
    $scope.data.TIMESTAMP;
    $scope.data.KEY = '55';
    $scope.data.PTtype = 1;
    $scope.data.STtype = 2;
    $scope.data.stand = 1;
    $scope.data.analyze = 2;
    $scope.isLoading = false;
  
  }

  $scope.buttonMessage = "Make A Sonata!"

  $scope.goSon = function(){
        var d = new Date();
        var n = d.getTime();
        var obj = {};
        $scope.buttonMessage = "Loading Sonata..."
        $scope.isLoading = true;
        $scope.data.TIMESTAMP = n;
        $rootScope.data = {};
        $rootScope.data = $scope.data;
        console.log($rootScope.data);
        $http({
          method: 'POST',
          url: '/goSonata',
          data: $scope.data
        }).then(function successCallback(response) {
            $location.url('/genSonView/'+response.data);            
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