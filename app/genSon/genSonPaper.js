'use strict';

angular.module('myApp.genSonPaper', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/genSonPaper', {
    templateUrl: 'genSon/genSonPaper.html',
    controller: 'genSonPaperCtrl'
  });
}])

.controller('genSonPaperCtrl', ['$scope', function($scope) {

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
        MIDIjs.play('res/sonataTest.midi');
        $scope.buttonImg = 'stop';
      }
      $scope.playing = !$scope.playing;
    }

}]);