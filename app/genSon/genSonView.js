'use strict';

angular.module('myApp.genSonView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/genSonView/:genSonNumber', {
    templateUrl: 'genSon/genSonView.html',
    controller: 'genSonViewCtrl'
  });
}])

.controller('genSonViewCtrl', [ '$scope','$location','$routeParams',
    function($scope,$location,$routeParams) {

    $scope.genSonNumber = $routeParams.genSonNumber
    $scope.buttonImg = 'play';
    $scope.playing = false;
    $scope.$on('$destroy', function() {
      MIDIjs.stop();
    });
      //MIDIjs.play('engines/Generative-Music-master/out/'+$scope.genSonNumber+'/Sonody.midi');


    $scope.toString = function(note){
    	if(note==undefined){
    		return 'not a note'
    	}
      var notes = ['C','C#','D','Eb','E','F','F#','G','Ab','A','Bb','B']
      return notes[note%12]+''+Math.floor(note/12);
    };

    $scope.back = function(){
      console.log('hi?');
      $location.url('/genSon/true');  
    }

    $scope.toggle = function () {
      if($scope.playing){
        MIDIjs.stop();
        $scope.buttonImg = 'play';
      }else{
        MIDIjs.play('engines/SonataGenerator-master/out/'+$scope.genSonNumber+'/PianoSonataScore.midi');
        $scope.buttonImg = 'stop';
      }
      $scope.playing = !$scope.playing;
    }

}]);

