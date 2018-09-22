'use strict';

angular.module('myApp.splitView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/splitView/:splitNumber', {
    templateUrl: 'split/splitView.html',
    controller: 'splitViewCtrl'
  });
}])

.controller('splitViewCtrl', [ '$scope','$location','$routeParams',
    function($scope,$location,$routeParams) {

    $scope.splitNumber = $routeParams.splitNumber
    $scope.buttonImg = 'play';
    
    $scope.playing = false;
    $scope.$on('$destroy', function() {
      MIDIjs.stop();
    });
      //MIDIjs.play('engines/Generative-Music-master/out/'+$scope.splitNumber+'/Sonody.midi');


    $scope.back = function(){
      console.log('hi?');
      $location.url('/split/true');  
    }



    $scope.toggle = function () {
      if($scope.playing){
        MIDIjs.stop();
        $scope.buttonImg = 'play';
      }else{
        MIDIjs.play('engines/babysFirstConcerto-master/out/'+$scope.splitNumber+'/fullOutput.midi');
        $scope.buttonImg = 'stop';
      }
      $scope.playing = !$scope.playing;
    }

}]);

