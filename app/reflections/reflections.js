'use strict';

angular.module('myApp.reflections', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/reflections', {
    templateUrl: 'reflections/reflections.html',
    controller: 'reflectionsCtrl'
  });
}])

.controller('reflectionsCtrl',  [ '$scope','$window','$http','$routeParams','$rootScope',
  function($scope,$window,$http,$routeParams,$rootScope) {
  	

	$scope.data = {};
	$scope.data.TIMESTAMP;
	$scope.data.STAFF = 'treble';

  $scope.data.HIGH = 79;
  $scope.data.MID = 55;
	$scope.data.LOW = 43;
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
          url: '/goReflections',
          data: $scope.data
        }).then(function successCallback(response) {
            $window.location.assign('http://www.brianellissound.com/engines/Reflections-master/out/'+response.data+'/ReflectionsScore.pdf');            
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