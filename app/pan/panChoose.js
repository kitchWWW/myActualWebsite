
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
    $scope.timestamp = urlArgs['timestamp']
    var jsonUrl = 'SteelPan/out/'+($scope.timestamp)+"/totalScore.json" 
    $scope.score = JSON.parse(Get(jsonUrl));

});