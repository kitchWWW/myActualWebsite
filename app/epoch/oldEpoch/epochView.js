'use strict';

angular.module('myApp.epochView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/epochView/:epochNumber', {
    templateUrl: 'epoch/epochView.html',
    controller: 'epochViewCtrl'
  });
}])

.controller('epochViewCtrl', [ '$scope','$routeParams', function($scope,$routeParams) {

    MIDIjs.play('out/epoch/III.midi');

    console.log($routeParams)
    $scope.epochNumber = $routeParams.epochNumber
    $scope.buttonImg = 'play';
    $scope.playing = false;
    $scope.$on('$destroy', function() {
      MIDIjs.stop();
    });

    $scope.toString = function(note){
    	if(note==undefined){
    		return 'not a note'
    	}
      var notes = ['C','C#','D','Eb','E','F','F#','G','Ab','A','Bb','B']
      return notes[note%12]+''+Math.floor(note/12);
    };

    $scope.toggle = function () {
      if($scope.playing){
        MIDIjs.stop();
        $scope.buttonImg = 'play';
      }else{
        MIDIjs.play('engines/Generative-Music-master/out/'+$scope.genMelNumber+'/melody.midi');
        $scope.buttonImg = 'stop';
      }
      $scope.playing = !$scope.playing;
    }

}]);

