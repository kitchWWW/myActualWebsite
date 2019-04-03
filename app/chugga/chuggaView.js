'use strict';



angular.module('myApp.chuggaView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/chuggaView/:chuggaNumber', {
    templateUrl: 'chugga/chuggaView.html',
    controller: 'chuggaViewCtrl'
  });
}])

.controller('chuggaViewCtrl', [ '$scope','$location','$routeParams','$interval',
    function($scope,$location,$routeParams,$interval) {

    var chuggaMap = {}
    var NOT_STARTED = "..."
    chuggaMap[NOT_STARTED] = "(not yet started)"
    var CHUGGA_ONLY = "1:0"
    chuggaMap[CHUGGA_ONLY] = "chugga only"
    var CHUGGA_TWO_ONE = "2:2"
    chuggaMap[CHUGGA_TWO_ONE] = "chugga chugga choo choo"
    var CHUGGA_FOUR_ONE = "4:2"
    chuggaMap[CHUGGA_FOUR_ONE] = "chugga chugga chugga chugga choo choo"
    var CHUGGA_THREE_ONE = "3:2"
    chuggaMap[CHUGGA_THREE_ONE] = "chugga chugga chugga choo choo"
    var CHUGGA_THREE_TWO = "3:4"
    chuggaMap[CHUGGA_THREE_TWO] = "chugga chugga chugga choo choo choo choo"
    var CHUGGA_FOUR_TWO = "4:4"
    chuggaMap[CHUGGA_FOUR_TWO] = "chugga chugga chugga chugga choo choo choo choo"
    var CHUGGA_TWO_TWO = "2:4"
    chuggaMap[CHUGGA_TWO_TWO] = "chugga chugga choo choo choo choo"
    var CHUGGA_ONE_THREE = "1:6"
    chuggaMap[CHUGGA_ONE_THREE] = "chugga choo choo choo choo choo choo"
    
    var CHOO_FREELY = "?:1"
    chuggaMap[CHOO_FREELY] = "choo freely"
    var WAIT = "0:0"
    chuggaMap[WAIT] = "wait..."
    var LENGTH_OF_START_WAIT = 2; //should be 8 in production






    $scope.chuggaNumber = $routeParams.chuggaNumber
    $scope.partNo = 0;
    $scope.totalLength = 150;
    $scope.totalNoParts = 5;
    $scope.buttonIcon = 'play';
    $scope.directions = NOT_STARTED;
    $scope.isRunning = "not running...";
    $scope.buttonLable = "Press to begin"
    $scope.chuggaVal = "1 pulse"
    $scope.chooVal = "3 pulses"
    $scope.volume = "silent"
    $scope.startTime = 0;
    $scope.myrng = new Math.seedrandom($routeParams.chuggaNumber);
    $scope.hasBegun = false;
    $scope.dynamics = ['silent','quietly','medium volume','loud','yell']
    $scope.partOfPiece = [];
    $scope.partsDir = [];
    $scope.partsVol = [];
    $scope.section = 'prelude'
    $scope.ratio = chuggaMap[NOT_STARTED]











    $scope.rand = function(max) {
      return Math.floor($scope.myrng() * Math.floor(max));
    }    

    console.log($scope.rand(50));                // Always 7

    for (var i = 0; i < $scope.totalNoParts; i++) { 
      var arr1 = []
      var arr2 = []
      var arr3 = []
      for(var z = 0; z < LENGTH_OF_START_WAIT; z++){
        arr1.push(WAIT)
        arr2.push($scope.dynamics[0])
        arr3.push("starting...")
      }
      $scope.partsDir.push(arr1)
      $scope.partsVol.push(arr2)
      $scope.partOfPiece.push(arr3)
    }
/*build the actual piece here
    porportion the piece:
    fadeIn: 2/24
    W1: 5 / 24
    space: 2/24
    W2: 2 / 24
    space: 1/24
    W3: 3 / 24
    space: 1/24
    W4: 6 /24
    Ending:2/24
*/




//Making opening

    var lengthOfSection = Math.floor((2/24)*$scope.totalLength)
    console.log(lengthOfSection)
    var fadeInStartPoints = []
    for (var p = 0; p < $scope.totalNoParts; p++) { 
      fadeInStartPoints.push($scope.rand(lengthOfSection - 4))
    }
    fadeInStartPoints[0] = 0
    console.log(fadeInStartPoints)
    for (var p = 0; p < $scope.totalNoParts; p++) { 
      for (var t = 0; t < lengthOfSection; t++){
        $scope.partOfPiece[p].push("Opening")

        if(t < fadeInStartPoints[p]){
          $scope.partsDir[p].push(WAIT)
          $scope.partsVol[p].push($scope.dynamics[0])
        }else{
          $scope.partsDir[p].push(CHUGGA_ONLY)
          if(t < lengthOfSection - 5){
            $scope.partsVol[p].push($scope.dynamics[1])
          }else{
            $scope.partsVol[p].push($scope.dynamics[2])
          }
        }
      }
    }

// now make the first feature:

    var lengthOfSection = Math.floor((5/24)*$scope.totalLength)
    var lengthOfFirstHalf = Math.floor((lengthOfSection -10) / 2)
    var lengthOfSecondHalf = lengthOfSection - lengthOfFirstHalf
    console.log(lengthOfSection)
    var whenDoYourChugga = []
    var LENGTH_OF_CHUGGA_INTERVAL = 6
    for (var p = 0; p < $scope.totalNoParts; p++) { 
      whenDoYourChugga.push($scope.rand(lengthOfFirstHalf - LENGTH_OF_CHUGGA_INTERVAL))
    }
    whenDoYourChugga[0] = 0
    console.log("whenDoYourChugga")
    console.log(whenDoYourChugga)
    for (var p = 0; p < $scope.totalNoParts; p++) { 
      for (var t = 0; t < lengthOfFirstHalf; t++){
        $scope.partOfPiece[p].push("Feature 1 pt.1")
        if(t < whenDoYourChugga[p]){
          $scope.partsDir[p].push(CHUGGA_ONLY)
          $scope.partsVol[p].push($scope.dynamics[2])
        }else if (t < whenDoYourChugga[p] + LENGTH_OF_CHUGGA_INTERVAL){
          $scope.partsDir[p].push(CHUGGA_TWO_ONE)
          $scope.partsVol[p].push($scope.dynamics[3])
        }else{
          $scope.partsDir[p].push(CHUGGA_ONLY)
          $scope.partsVol[p].push($scope.dynamics[2])
        }
      }
    }
    //Doing the second half, 4:1 and 3:1
    for (var p = 0; p < $scope.totalNoParts; p++) { 
      for (var t = 0; t < lengthOfFirstHalf; t++){
        $scope.partOfPiece[p].push("Feature 1 pt.2")
        if(p < $scope.totalNoParts / 2){
          $scope.partsDir[p].push(CHUGGA_THREE_ONE)
          $scope.partsVol[p].push($scope.dynamics[2])
        }else{
          $scope.partsDir[p].push(CHUGGA_FOUR_ONE)
          $scope.partsVol[p].push($scope.dynamics[2])
        }
      }
    }


//Do a short spacer
  var lengthOfSpacer = Math.floor((2/24)*$scope.totalLength)
  for (var p = 0; p < $scope.totalNoParts; p++) { 
      for (var t = 0; t < lengthOfSpacer; t++){
        $scope.partOfPiece[p].push("Spacer 1")
        $scope.partsDir[p].push(CHUGGA_ONLY)
        $scope.partsVol[p].push($scope.dynamics[1])
      }
    }

//Do the second feature
  var lengthOfSection = Math.floor((2/24)*$scope.totalLength)
  for (var p = 0; p < $scope.totalNoParts; p++) { 
      for (var t = 0; t < lengthOfSection; t++){
        $scope.partOfPiece[p].push("Feature 2")
        $scope.partsDir[p].push(CHUGGA_TWO_ONE)
        $scope.partsVol[p].push($scope.dynamics[3])
    }
  }


//Do a short spacer
  var lengthOfSpacer = Math.floor((1/24)*$scope.totalLength)
  for (var p = 0; p < $scope.totalNoParts; p++) { 
      for (var t = 0; t < lengthOfSpacer; t++){
        $scope.partOfPiece[p].push("Spacer 2")
        $scope.partsDir[p].push(CHUGGA_ONLY)
        $scope.partsVol[p].push($scope.dynamics[1])
      }
    }



  var lengthOfSection = Math.floor((2/24)*$scope.totalLength)
  var howManySpecail = 2
  if ($scope.totalNoParts < 4 ){
    howManySpecail = 1
  }
  for (var p = 0; p < $scope.totalNoParts; p++) { 
      for (var t = 0; t < lengthOfSection; t++){
        $scope.partOfPiece[p].push("Feature 3")
        if(p < howManySpecail){
          $scope.partsDir[p].push(CHOO_FREELY)
          $scope.partsVol[p].push($scope.dynamics[3])
        }else{
          $scope.partsDir[p].push(CHUGGA_ONLY)
          $scope.partsVol[p].push($scope.dynamics[1])          
        }
    }
  }


//Do a short spacer
  var lengthOfSpacer = Math.floor((1/24)*$scope.totalLength)
  for (var p = 0; p < $scope.totalNoParts; p++) { 
      for (var t = 0; t < lengthOfSpacer; t++){
        $scope.partOfPiece[p].push("Spacer 3")
        $scope.partsDir[p].push(CHUGGA_ONLY)
        $scope.partsVol[p].push($scope.dynamics[4])
      }
    }


    var lengthOfSection = Math.floor((6/24)*$scope.totalLength)
    var lengthOfPart = Math.floor((lengthOfSection /3))
    //Doing the second half, 4:1 and 3:1
    for (var p = 0; p < $scope.totalNoParts; p++) { 
      for (var t = 0; t < lengthOfPart; t++){
        $scope.partOfPiece[p].push("Feature 4")
        if(p < $scope.totalNoParts / 2){
          $scope.partsDir[p].push(CHUGGA_FOUR_TWO)
          $scope.partsVol[p].push($scope.dynamics[1])
        }else{
          $scope.partsDir[p].push(CHUGGA_THREE_TWO)
          $scope.partsVol[p].push($scope.dynamics[1])
        }
      }
    }
    for (var p = 0; p < $scope.totalNoParts; p++) { 
      for (var t = 0; t < lengthOfPart; t++){
        $scope.partOfPiece[p].push("Feature 4")
        if(p < $scope.totalNoParts / 2){
          $scope.partsDir[p].push(CHUGGA_TWO_TWO)
          $scope.partsVol[p].push($scope.dynamics[2])
        }else{
          $scope.partsDir[p].push(CHUGGA_THREE_TWO)
          $scope.partsVol[p].push($scope.dynamics[1])
        }
      }
    }
    for (var p = 0; p < $scope.totalNoParts; p++) { 
      for (var t = 0; t < lengthOfPart; t++){
        $scope.partOfPiece[p].push("Feature 4")
        if(p < $scope.totalNoParts / 2){
          $scope.partsDir[p].push(CHUGGA_TWO_TWO)
          $scope.partsVol[p].push($scope.dynamics[2])
        }else{
          $scope.partsDir[p].push(CHUGGA_ONE_THREE)
          $scope.partsVol[p].push($scope.dynamics[3])
        }
      }
    }

//The ending now:
  var lengthOfSpacer = Math.floor((2/24)*$scope.totalLength / 3)
  for (var p = 0; p < $scope.totalNoParts; p++) { 
      for (var t = 0; t < lengthOfSpacer; t++){
        $scope.partOfPiece[p].push("Closing pt.1")
        $scope.partsDir[p].push(CHUGGA_TWO_ONE)
        $scope.partsVol[p].push($scope.dynamics[3])
      }
    }
  for (var p = 0; p < $scope.totalNoParts; p++) { 
      for (var t = 0; t < lengthOfSpacer; t++){
        $scope.partOfPiece[p].push("Closing pt.2")
        $scope.partsDir[p].push(CHUGGA_ONLY)
        $scope.partsVol[p].push($scope.dynamics[3])
      }
    }
  for (var p = 0; p < $scope.totalNoParts; p++) { 
      for (var t = 0; t < lengthOfSpacer; t++){
        $scope.partOfPiece[p].push("Closing pt.3")
        if(p == 0){
          $scope.partsDir[p].push(CHUGGA_TWO_ONE)
          $scope.partsVol[p].push($scope.dynamics[2])
        }else{
          $scope.partsDir[p].push(CHUGGA_ONLY)
          $scope.partsVol[p].push($scope.dynamics[1])
        }
      }
    }
  for (var p = 0; p < $scope.totalNoParts; p++) { 
      for (var t = 0; t < 6; t++){
        $scope.partOfPiece[p].push("Closing for real")
        if(p == 0){
          $scope.partsDir[p].push(CHUGGA_TWO_ONE)
          $scope.partsVol[p].push($scope.dynamics[1])
        }else{
          $scope.partsDir[p].push(WAIT)
          $scope.partsVol[p].push($scope.dynamics[0])
        }
      }
    }

var lengthOfSpacer = LENGTH_OF_START_WAIT
  for (var p = 0; p < $scope.totalNoParts; p++) { 
      for (var t = 0; t < lengthOfSpacer; t++){
        $scope.partOfPiece[p].push("We are done now")
        $scope.partsDir[p].push(WAIT)
        $scope.partsVol[p].push($scope.dynamics[0])
      }
    }



// now for the stuff with displaying it



    $scope.display = function(){
      var curTime = new Date().getTime()
      var currOffsetIndex = Math.floor((curTime - $scope.startTime) / 1000)
      console.log(currOffsetIndex)
      if(currOffsetIndex > $scope.partsDir[0].length){
        $scope.ratio =  "Bow!"
        $scope.directions = "Bow to the audience plz thnks."
        $scope.volume =  "loudly?"
        $scope.section = "Postlude"
      }else{
        $scope.ratio =  $scope.partsDir[$scope.partNo][currOffsetIndex]
      $scope.directions = chuggaMap[$scope.partsDir[$scope.partNo][currOffsetIndex]]
      $scope.volume =  $scope.partsVol[$scope.partNo][currOffsetIndex]
      $scope.section = $scope.partOfPiece[$scope.partNo][currOffsetIndex]

      }
    }

    $scope.begin = function(){
        if($scope.hasBegun == false){
          $scope.hasBegun = "true";
          $scope.directions = chuggaMap[WAIT] 
          $scope.ratio = WAIT
          $scope.isRunning = "now running!";
          $scope.buttonIcon = "stop";
          $scope.buttonLable = "Press to stop"
          $scope.startTime = new Date().getTime();
          $scope.curInterval = $interval($scope.display, 350);
        }else{
          console.log("going home now!")
          location.reload()
        }
    }




}]);

