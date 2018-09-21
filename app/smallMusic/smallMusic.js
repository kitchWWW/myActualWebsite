'use strict';

angular.module('myApp.smallMusic', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/smallMusic', {
    templateUrl: 'smallMusic/smallMusic.html',
    controller: 'smallMusicCtrl'
  });
}])

.controller('smallMusicCtrl',  [ '$scope','$window','$http','$routeParams','$rootScope',
  function($scope,$window,$http,$routeParams,$rootScope) {
  	

	$scope.data = {};
	$scope.data.TIMESTAMP;
	$scope.isLoading = false;

  $scope.buttonMessage = "Generate Score"

  $scope.goSmall = function(){
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
          url: '/goSmallMusic',
          data: $scope.data
        }).then(function successCallback(response) {
            $window.location.assign('http://www.brianellissound.com/engines/SmallMusic-master/out/'+response.data+'/SmallMusic.pdf');            
          }, function errorCallback(response) {
            console.log(response);
          });
    }

}]);