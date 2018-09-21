'use strict';

angular.module('myApp.genMelPaper', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/genMelPaper', {
    templateUrl: 'genMel/genMelPaper.html',
    controller: 'genMelPaperCtrl'
  });
}])

.controller('genMelPaperCtrl', ['$scope', function($scope) {

	$scope.buttonImg = 'play';
    $scope.playing = false;
    $scope.$on('$destroy', function() {
      MIDIjs.stop();
    });
    
    $scope.toggle = function () {
      if($scope.playing){
        MIDIjs.stop();
        $scope.buttonImg = 'play';
      }else{
        MIDIjs.play('res/initMelody.midi');
        $scope.buttonImg = 'stop';
      }
      $scope.playing = !$scope.playing;
    }

}]);