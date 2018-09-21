'use strict';

angular.module('myApp.epoch', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/epoch', {
    templateUrl: 'epoch/epoch.html',
    controller: 'epochCtrl'
  });
}])

.controller('epochCtrl', [ '$scope','$location', function($scope,$location) {

	$scope.instruments = [];
	var instruments = $scope.instruments;
	instruments[0] = { name:"Guitar", notes:[60,63, 64, 65], staff:'treble_8', tremolo:false, crescendo: false}
	instruments[1] = { name:"Oboe", notes:[60,63, 64, 65], staff:'treble', tremolo:false, crescendo:true}
	instruments[2] = { name:"Marimba", notes:[60,63, 64, 65], staff:'bass', tremolo: true, crescendo: true}
	instruments[3] = { name:"Unpitched Percussion", notes:[60,63, 64, 65], staff:'percussion' , tremolo: true, crescendo: true}



    $scope.go = function(){
        var d = new Date();
        var n = d.getTime();
        var obj = {};
        obj.timeStamp = n;
        obj.instruments = $scope.instruments;
        console.log(obj);
        console.log($location);
        console.log('/epochView/'+n);
        $location.url('/epochView/'+n)
    }


	$scope.add = function(index){
      $scope.instruments.splice(index+1,0,{ name:"Guitar", notes:[60,63, 64, 65], staff:'treble_8', tremolo:false, crescendo: false})
    };
    $scope.up = function(index){
    	if(index == 0){
    		return;
    	}
    	var temp = $scope.instruments[index]
    	$scope.instruments[index] = $scope.instruments[index-1];
		$scope.instruments[index-1] = temp;

    }
    $scope.down = function(index){
    	if(index == $scope.instruments.length-1){
    		return;
    	}
    	var temp = $scope.instruments[index]
    	$scope.instruments[index] = $scope.instruments[index+1];
		$scope.instruments[index+1] = temp;
    }
    $scope.remove = function(index){
    	if(index == undefined){
 	    	$scope.instruments.splice($scope.instruments.length-1,1)
    	}else{
    		$scope.instruments.splice(index,1)
    	}
    };
    $scope.fill = function(index){
        if(index==0){
            $scope.instruments = [
        { name:"Violin 1", notes:[60,63, 64, 65], staff:'treble', tremolo:false, crescendo: true},
        { name:"Violin 2", notes:[60,63, 64, 65], staff:'treble', tremolo:false, crescendo: true},
        { name:"Viola", notes:[60,63, 64, 65], staff:'alto', tremolo:false, crescendo: true},
        { name:"Cello", notes:[60,63, 64, 65], staff:'bass', tremolo:false, crescendo: true}
            ]
        }
        if(index==1){
            $scope.instruments = [
        { name:"Unpitched Percussion 1", notes:[60,63, 64, 65], staff:'treble', tremolo:true, crescendo: true},
        { name:"Unpitched Percussion 2", notes:[60,63, 64, 65], staff:'treble', tremolo:true, crescendo: true},
        { name:"Unpitched Percussion 3", notes:[60,63, 64, 65], staff:'treble', tremolo:true, crescendo: true},
        { name:"Unpitched Percussion 4", notes:[60,63, 64, 65], staff:'treble', tremolo:true, crescendo: true},
            ]
        }
        if(index==2){
            $scope.instruments = [
        { name:"Oboe", notes:[60,63, 64, 65], staff:'treble', tremolo:false, crescendo: true},
        { name:"Marimba 1", notes:[60,63, 64, 65], staff:'treble', tremolo:true, crescendo: true},
        { name:"Guitar", notes:[60,63, 64, 65], staff:'treble', tremolo:false, crescendo: false},
        { name:"Marimba 2", notes:[60,63, 64, 65], staff:'treble', tremolo:true, crescendo: true},
            ]
        }
        if(index==3){
            $scope.instruments = [
        { name:"Horn", notes:[60,63, 64, 65], staff:'bass', tremolo:false, crescendo: true},
        { name:"Unpitched Percussion", notes:[60,63, 64, 65], staff:'treble', tremolo:true, crescendo: true},
        { name:"Viola", notes:[60,63, 64, 65], staff:'alto', tremolo:false, crescendo: true},
        { name:"Steel Pan", notes:[60,63, 64, 65], staff:'treble', tremolo:true, crescendo: true},
            ]
        }
    };
    $scope.toString = function(note){
    	if(note==undefined){
    		return 'not a note'
    	}
      var notes = ['C','C#','D','Eb','E','F','F#','G','Ab','A','Bb','B']
      return notes[note%12]+''+Math.floor(note/12);
    };

}]);

