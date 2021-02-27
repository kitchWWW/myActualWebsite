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
    $scope.data.SEED = '';
    $scope.data.TIMESTAMP;

    $scope.data.SOUND1 = 'Plastic';
    $scope.data.SOUND2 = 'Glass';
    $scope.data.SOUND3 = 'Cardboard';
    $scope.data.LENGTHINSEC = 300;
  }

  $scope.isLoadingScore = false;
  $scope.isLoadingVideo = false;
  $scope.buttonMessage = "Generate Score"
  $scope.buttonVideoMessage = "Generate Video"

  $scope.goSon = function(){
        var d = new Date();
        var n = d.getTime();
        var obj = {};
        $scope.buttonMessage = "Generating Score..."
        $scope.isLoadingScore = true;

        if($scope.data.SEED == ''){
          $scope.data.TIMESTAMP = n;
        }else{
          $scope.data.TIMESTAMP = $scope.data.SEED+"---"+n;
        }

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
http://localhost:8000/?name1=Paper&name2=Glass&name3=Plastic&timestamp=1614434513465&length=100
    $scope.goVideo = function(){
        var d = new Date();
        var n = d.getTime();
        var obj = {};
        $scope.buttonVideoMessage = "Generating Video..."
        $scope.isLoadingVideo = true;
        if($scope.data.SEED == ''){
          $scope.data.TIMESTAMP = n;
        }else{
          $scope.data.TIMESTAMP = $scope.data.SEED+"---"+n;
        }

        $rootScope.data = {};
        $rootScope.data = $scope.data;
        console.log($rootScope.data);
        $http({
          method: 'POST',
          url: '/goThreeNotes',
          data: $scope.data
        }).then(function successCallback(response) {
            $window.location.assign('http://www.brianellissound.com/threeNotesScoreVideo?name1='+$scope.data.SOUND1+'&name2='+$scope.data.SOUND2+'&name3='+$scope.data.SOUND3+'&timestamp='+response.data+'&length='+$scope.data.LENGTHINSEC);
          }, function errorCallback(response) {
            console.log(response);
          });
    }

}]);















