'use strict';

angular.module('myApp.threenotes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/threenotes', {
    templateUrl: 'threenotes/threenotes.html',
    controller: 'threenotesCtrl'
  });
}])

.controller('threenotesCtrl',  [ '$scope','$window','$http','$routeParams','$rootScope',
  function($scope,$window,$http,$routeParams,$rootScope) {
  	

  if(Boolean($routeParams.preBuilt) && ($rootScope.data != null)){
    $scope.data = $rootScope.data;
  }else{
    $scope.data = {};
    $scope.data.clefToUse = 'treble'
    $scope.data.NAME = 'Brian';
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
          url: '/goThreeNotes',
          data: $scope.data
        }).then(function successCallback(response) {
            $window.location.assign('http://www.brianellissound.com/engines/ThreeNotes-master/out/'+response.data+'/ThreeNotesScore.pdf');            
          }, function errorCallback(response) {
            console.log(response);
          });
    }

}]);