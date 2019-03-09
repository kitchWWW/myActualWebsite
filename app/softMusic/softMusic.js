'use strict';

angular.module('myApp.softMusic', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/softMusic', {
    templateUrl: 'softMusic/softMusic.html',
    controller: 'softMusicCtrl'
  });
}])

.controller('softMusicCtrl',  [ '$scope','$location','$http','$routeParams','$rootScope',
  function($scope,$location,$http,$routeParams,$rootScope) {
  	

	$scope.data = {};
	$scope.data.TIMESTAMP;
	$scope.data.isLoading = false;
  $scope.data.DURATION = "0";
  $scope.data.NOVOICES = 3;
  $scope.data.SEED = "";
  $scope.data.clefToUse = "treble";


  $scope.buttonMessage = "Generate Score"

  $scope.gosoft = function(){
        var d = new Date();
        var n = d.getTime();
        var obj = {};
        $scope.buttonMessage = "Generating Score..."
        $scope.isLoading = true;
        $scope.data.TIMESTAMP = n;
        if($scope.data.SEED!=""){
          $scope.data.TIMESTAMP = $scope.data.SEED+"---"+n;
        }
        $rootScope.data = {};
        $rootScope.data = $scope.data;
        console.log($rootScope.data);
        $http({
          method: 'POST',
          url: '/goSoftMusic',
          data: $scope.data
        }).then(function successCallback(response) {
            $location.url('/softMusicView/'+response.data);            
          }, function errorCallback(response) {
            console.log(response);
          });
    }

}]);