'use strict';

angular.module('myApp.genMelView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/genMelView/:genMelNumber', {
    templateUrl: 'genMel/genMelView.html',
    controller: 'genMelViewCtrl'
  });
}])

.controller('genMelViewCtrl', [ '$scope','$location','$routeParams',
    function($scope,$location,$routeParams) {

    $scope.genMelNumber = $routeParams.genMelNumber
    $scope.buttonImg = 'play';
    $scope.playing = false;
    $scope.$on('$destroy', function() {
      MIDIjs.stop();
    });
      //MIDIjs.play('engines/Generative-Music-master/out/'+$scope.genMelNumber+'/melody.midi');


    $scope.toString = function(note){
    	if(note==undefined){
    		return 'not a note'
    	}
      var notes = ['C','C#','D','Eb','E','F','F#','G','Ab','A','Bb','B']
      return notes[note%12]+''+Math.floor(note/12);
    };

    $scope.back = function(){
      console.log('hi?');
      $location.url('/genMel/true');  
    }

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

