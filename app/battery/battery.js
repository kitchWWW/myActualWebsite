'use strict';

angular.module('myApp.battery', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/battery', {
    templateUrl: 'battery/battery.html',
    controller: 'batteryCtrl'
  });
}])

.controller('batteryCtrl',  [ '$scope','$window','$http','$routeParams','$rootScope',
  function($scope,$window,$http,$routeParams,$rootScope) {
  	

  if(Boolean($routeParams.preBuilt) && ($rootScope.data != null)){
    $scope.data = $rootScope.data;
  }else{

    $scope.data = {};
    $scope.data.LOW = 60;
    $scope.data.HIGH = 85;
    $scope.data.LONG = 3;
    $scope.data.TIMESTAMP;
  }

	$scope.isLoading = false;
  $scope.buttonMessage = "Generate Score"

  $scope.goSon = function(){
        var d = new Date();
        var n = d.getTime();
        var obj = {};
        $scope.buttonMessage = "Generating Score..."
        $scope.isLoading = true;

        $scope.data.TIMESTAMP = n;  
        $rootScope.data = {};
        $rootScope.data = $scope.data;
        console.log($rootScope.data);
        $http({
          method: 'POST',
          url: '/gobattery',
          data: $scope.data
        }).then(function successCallback(response) {
            $scope.isGenerated = true;
            $scope.isLoading = false;
            $scope.buttonMessage = "Generate Score";
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