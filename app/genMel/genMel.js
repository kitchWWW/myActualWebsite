'use strict';

angular.module('myApp.genMel', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/genMel/:preBuilt?', {
    templateUrl: 'genMel/genMel.html',
    controller: 'genMelCtrl'
  });
}])

.controller('genMelCtrl', [ '$scope','$location','$http','$routeParams','$rootScope',
  function($scope,$location,$http,$routeParams,$rootScope) {

  if(Boolean($routeParams.preBuilt) && ($rootScope.data != null)){
    $scope.data = $rootScope.data;
  }else{
    $scope.data = {};
    $scope.data.DATASET_SIZE = 800
    $scope.data.ITERATIONS = 600;
    $scope.data.TIMESTAMP;
    $scope.data.RANK_STARTDO = 300;
    $scope.data.RANK_ENDDO = 300;
    $scope.data.RANK_SECOND_TO_LAST = 300;
    $scope.data.RANK_CHORD_TONE_STRONG=100;
    $scope.data.RANK_CHORD_TONE_GEN=30;
    $scope.data.RANK_DIATONIC_EVER=2400;
    $scope.data.RANK_STEPWISE = 100;
    $scope.data.RANK_CHORDAL_LEAP=20;
    $scope.data.RANK_LEAP_PUNISH_R1 = -150;
    $scope.data.RANK_LEAP_PUNISH_R2 = -250;
    $scope.data.RANK_LEAP_PUNISH_R3 = -250;
    $scope.data.RANK_LEAP_PUNISH_R4 = -1000;
    $scope.data.RANK_LEAP_PUNISH_TRI = -500;
    $scope.data.RANK_CHANGE_ON_STRONG = 200;
    $scope.data.RANK_CHANGE_FROM_PREV_STRONG = 200;
    $scope.data.RANK_QUARTER_NOTE_REWARD = 200;
    $scope.data.RANK_DOUBLE_EIGHT_REWARD = 200;
    $scope.data.RANK_RANGE_REWARD = -500;
    //ends at #21

    $scope.data.SCALE_0 = true;
    $scope.data.SCALE_1 = false;
    $scope.data.SCALE_2 = true;
    $scope.data.SCALE_3 = false;
    $scope.data.SCALE_4 = true;
    $scope.data.SCALE_5 = true;
    $scope.data.SCALE_6 = false;
    $scope.data.SCALE_7 = true;
    $scope.data.SCALE_8 = false;
    $scope.data.SCALE_9 = true;
    $scope.data.SCALE_10 = false;
    $scope.data.SCALE_11 = true;

    $scope.data.M1_CHORD_0 = true;
    $scope.data.M1_CHORD_1 = false;
    $scope.data.M1_CHORD_2 = false;
    $scope.data.M1_CHORD_3 = false;
    $scope.data.M1_CHORD_4 = true;
    $scope.data.M1_CHORD_5 = false;
    $scope.data.M1_CHORD_6 = false;
    $scope.data.M1_CHORD_7 = true;
    $scope.data.M1_CHORD_8 = false;
    $scope.data.M1_CHORD_9 = false;
    $scope.data.M1_CHORD_10 = false;
    $scope.data.M1_CHORD_11 = false;

    $scope.data.M2_CHORD_0 = true;
    $scope.data.M2_CHORD_1 = false;
    $scope.data.M2_CHORD_2 = false;
    $scope.data.M2_CHORD_3 = false;
    $scope.data.M2_CHORD_4 = false;
    $scope.data.M2_CHORD_5 = true;
    $scope.data.M2_CHORD_6 = false;
    $scope.data.M2_CHORD_7 = false;
    $scope.data.M2_CHORD_8 = false;
    $scope.data.M2_CHORD_9 = true;
    $scope.data.M2_CHORD_10 = false;
    $scope.data.M2_CHORD_11 = false;

    $scope.data.M3_CHORD_0 = false;
    $scope.data.M3_CHORD_1 = false;
    $scope.data.M3_CHORD_2 = true;
    $scope.data.M3_CHORD_3 = false;
    $scope.data.M3_CHORD_4 = false;
    $scope.data.M3_CHORD_5 = true;
    $scope.data.M3_CHORD_6 = false;
    $scope.data.M3_CHORD_7 = false;
    $scope.data.M3_CHORD_8 = false;
    $scope.data.M3_CHORD_9 = true;
    $scope.data.M3_CHORD_10 = false;
    $scope.data.M3_CHORD_11 = false;

    $scope.data.M4_CHORD_0 = false;
    $scope.data.M4_CHORD_1 = false;
    $scope.data.M4_CHORD_2 = true;
    $scope.data.M4_CHORD_3 = false;
    $scope.data.M4_CHORD_4 = false;
    $scope.data.M4_CHORD_5 = true;
    $scope.data.M4_CHORD_6 = false;
    $scope.data.M4_CHORD_7 = true;
    $scope.data.M4_CHORD_8 = false;
    $scope.data.M4_CHORD_9 = false;
    $scope.data.M4_CHORD_10 = false;
    $scope.data.M4_CHORD_11 = true;

    $scope.data.firstNote = 0;
    $scope.data.lastNote = 0;
    $scope.data.lowestNote = 43;
    $scope.data.highestNote = 64;

    $scope.isLoading = false;

  }

  $scope.buttonMessage = "Make Music"

  $scope.goMel = function(){
        var d = new Date();
        var n = d.getTime();
        var obj = {};
        $scope.buttonMessage = "Loading Melody... "
        $scope.isLoading = true;
        $scope.data.TIMESTAMP = n;
        $rootScope.data = {};
        $rootScope.data = $scope.data;
        console.log($rootScope.data);
        $http({
          method: 'POST',
          url: '/goMelody',
          data: $scope.data
        }).then(function successCallback(response) {
            $location.url('/genMelView/'+response.data);            
          }, function errorCallback(response) {
            //some sort of error message
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