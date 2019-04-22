String.prototype.toMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return minutes+':'+seconds;
}

function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}



var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope,$timeout,$location) {
	var urlArgs = $location.search()
	console.log(urlArgs)

	$scope.img_src = "tacet";
	$scope.countdown_value = "0".toMMSS()
	$scope.dynamic_value = 'silent'
	$scope.scoreData = []
	$scope.timestamp = urlArgs['timestamp']
	var scoreIndex = 0
	var jsonUrl = 'SteelPan/out/'+($scope.timestamp)+"/totalScore.json"	
	var scoreData = JSON.parse(Get(jsonUrl));
	console.log(scoreData)

//stuff that changes when score or part changes

	$scope.pi = urlArgs['playerNo'] //part index, 0-5 for the 6 person ensemble
	$scope.my_part = (1+parseInt($scope.pi)) + ": " + scoreData[$scope.pi]['insturment']
	$scope.lastChange = new Date().getTime();
	var score = scoreData[$scope.pi]['part']
	$scope.targetTime = $scope.lastChange + score[0].dur * 1000


	$scope.doFullUpdate = function(){
        var curTime = new Date().getTime();
        var timeDiff = $scope.targetTime - curTime
        if(timeDiff > -1000){
	        $scope.countdown_value = ((timeDiff) / 1000).toString().toMMSS()
        }
        if(timeDiff < 0){
        	$scope.lastChange = new Date().getTime();
        	scoreIndex+=1
        	if(scoreIndex > score.length){
        		$scope.stop()
        		$scope.dynamic_value = "you're done!"
        		$scope.countdown_value = "0".toMMSS()
        	}
        	$scope.targetTime = $scope.lastChange + score[scoreIndex].dur * 1000
        	console.log(score[scoreIndex])
        	if(score[scoreIndex].instruction == 'fade_out'){
	        	$scope.countdown_value = score[scoreIndex].dur.toString().toMMSS()
	        	$scope.dynamic_value = "fade out"
        	}else{
	        	$scope.img_src = score[scoreIndex].instruction
	        	$scope.dynamic_value = score[scoreIndex].dynamic
	        	$scope.countdown_value = score[scoreIndex].dur.toString().toMMSS()

        	}
        }
        console.log(curTime)
        mytimeout = $timeout($scope.doFullUpdate,200);
    }

    var mytimeout = $timeout($scope.doFullUpdate,200);
    $scope.stop = function(){
        $timeout.cancel(mytimeout);
    }

});