'use strict';

angular.module('myApp.babyfirstView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/babyfirstView/:babyfirstNumber', {
    templateUrl: 'babyfirst/babyfirstView.html',
    controller: 'babyfirstViewCtrl'
  });
}])

.controller('babyfirstViewCtrl', [ '$scope','$location','$routeParams',
    function($scope,$location,$routeParams) {

    $scope.babyfirstNumber = $routeParams.babyfirstNumber
    $scope.buttonImg = 'play';
    
    $scope.playing = false;
    $scope.$on('$destroy', function() {
      MIDIjs.stop();
    });
      //MIDIjs.play('engines/Generative-Music-master/out/'+$scope.babyfirstNumber+'/Sonody.midi');


    $scope.back = function(){
      console.log('hi?');
      $location.url('/babyfirst/true');  
    }



    $scope.toggle = function () {
      if($scope.playing){
        MIDIjs.stop();
        $scope.buttonImg = 'play';
      }else{
        MIDIjs.play('engines/babysFirstConcerto-master/out/'+$scope.babyfirstNumber+'/fullOutput.midi');
        $scope.buttonImg = 'stop';
      }
      $scope.playing = !$scope.playing;
    }

}]);

