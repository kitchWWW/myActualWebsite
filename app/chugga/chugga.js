'use strict';

angular.module('myApp.chugga', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/chugga/:preBuilt?', {
    templateUrl: 'chugga/chugga.html',
    controller: 'chuggaCtrl'
  });
}])

.controller('chuggaCtrl', [ '$scope','$location','$http','$routeParams','$rootScope',
  function($scope,$location,$http,$routeParams,$rootScope) {

  if(Boolean($routeParams.preBuilt) && ($rootScope.data != null)){
    $scope.data = $rootScope.data;
  }else{
    $scope.data = {};
    $scope.data.favoritePitch = 60;
    $scope.data.clefToUse = 'treble'
    $scope.data.lowestAccomp = 21;
    $scope.data.highestAccomp = 108;
    $scope.data.waysToPlay = [{way:'natural'},{way:'harmonic'}]
  }
  
  $scope.isLoading = false;
  $scope.buttonMessage = "Make a duet!"

  $scope.preset = function(index){
    if(index == 0){
      $scope.data.favoritePitch = 53;
      $scope.data.clefToUse = 'treble_8'
      $scope.data.lowestAccomp = 48;
      $scope.data.highestAccomp = 84;
      $scope.data.waysToPlay = [
        {way:'1st (open, capo)'},
        {way:'2nd string'},
        {way:'3rd string'},
        {way:'4th string'},
        {way:'5th (harmonic)'},
        {way:'6th (harmonic)'}
        ]
    }
    if(index == 1){
      $scope.data.favoritePitch = 76;
      $scope.data.clefToUse = 'treble'
      $scope.data.lowestAccomp = 21;
      $scope.data.highestAccomp = 108;
      $scope.data.waysToPlay = [
        {way:'Sul E, natural'},
        {way:'Sul E, harmonic'},
        {way:'Sul A, natural'},
        {way:'Sul A, harmonic'},
        {way:'Sul D (art. harm. above e)'},
        {way:'Sul D, natural'},
        {way:'Sul G (art. harm above a)'},
        {way:'Sul G (art. harm. above e)'},
        ]
    }
  }
  $scope.goCon = function(){
        var d = new Date();
        var n = d.getTime();
        var obj = {};
        $scope.buttonMessage = "Loading Duet..."
        $scope.isLoading = true;
        $scope.data.TIMESTAMP = n;
        $rootScope.data = {};
        $rootScope.data = $scope.data;
        console.log($rootScope.data);
        $http({
          method: 'POST',
          url: '/goConcerto',
          data: $scope.data
        }).then(function successCallback(response) {
            $location.url('/chuggaView/'+response.data);            
          }, function errorCallback(response) {
            console.log(response);
          });
    }
  $scope.add = function(){
    $scope.data.waysToPlay.push({way:''})
  }
  $scope.minus = function(){
    $scope.data.waysToPlay.splice(-1)
  }
	$scope.toString = function(note){
    	if(note==undefined){
    		return 'not a note'
    	}
      var notes = ['C','C#','D','Eb','E','F','F#','G','Ab','A','Bb','B']
      return notes[note%12]+''+Math.floor(note/12);
    };

}]);