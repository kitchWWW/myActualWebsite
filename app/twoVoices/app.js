var app = angular.module("app", []);

app.directive("drawing", [ '$http', function($http){
  return {
    restrict: "A",
    link: function(scope, element){
      var ctx = element[0].getContext('2d');
      var xargs = [];
      var yargs = [];
      var boardSize = 13;
      var curX;
      var curY;

      scope.$on('$destroy', function() {
        MIDIjs.stop();
      });


      drawBoard();

      
      
      element.bind('mousedown', function(event){
        var newX;
        var newY;
        if(event.offsetX!==undefined){
          newX = event.offsetX;
          newY = event.offsetY;
        } else {
          newX = event.layerX - event.currentTarget.offsetLeft;
          newY = event.layerY - event.currentTarget.offsetTop;
        }
        newX = Math.round(newX/50);
        newY = Math.round(newY/50);
        var oldX = xargs[xargs.length-1];
        var oldY = yargs[yargs.length-1];

        xargs.push(newX)
        yargs.push(newY)
        drawBoard();
        drawList();

      });

      element.bind('mouseup', function(event){

      });

      element.bind('mousemove', function(event){
        var newX;
        var newY;
        if(event.offsetX!==undefined){
          newX = event.offsetX;
          newY = event.offsetY;
        } else {
          newX = event.layerX - event.currentTarget.offsetLeft;
          newY = event.layerY - event.currentTarget.offsetTop;
        }
        newX = Math.round(newX/50);
        newY = Math.round(newY/50);
        var shouldDraw = true;
        if(newX == 0 || newY == 0 || newX == boardSize+1 || newY == boardSize+1){
          shouldDraw = false;
        }
        var oldX = xargs[xargs.length-1];
        var oldY = yargs[yargs.length-1];

        drawBoard();
        drawList();
        if(shouldDraw){
          draw(oldX*50,oldY*50,newX*50,newY*50);
        }
      });
        
      // canvas reset
      function reset(){
       element[0].width = element[0].width; 
      }

      function drawBoard(){
        ctx.clearRect(0,0,(boardSize+1)*50,(boardSize+1)*50);
        for(var i = 1; i < boardSize+1; i ++){
          for(var j = 1; j < boardSize+1; j ++){
            ctx.beginPath();
            ctx.arc(50*i, 50*j, 7, 0, 2 * Math.PI, false);
            ctx.lineWidth = 1;
            ctx.strokeStyle = "#000000";
            ctx.stroke();
          }
        }
        var letters = ["c","c#","d","d#","e","f","f#","g","g#","a","a#","b","c"];
        for(var i = 0; i < boardSize; i ++){
          ctx.font = "15px Arial";
          ctx.fillText(letters[letters.length-1-i],10, 55 + (50 * i));          
          ctx.fillText(letters[i],45 + (50*i), (boardSize+1)*50 - 10);          
        }
      }
      
      function drawList(){
        for(var i = 0 ; i < xargs.length-1; i++){
          var lx = xargs[i]*50;
          var ly = yargs[i]*50;
          var cx = xargs[i+1]*50;
          var cy = yargs[i+1]*50;
          draw(lx,ly,cx,cy)
        }
        draw(xargs[xargs.length-1] * 50,
          yargs[yargs.length-1] * 50,
          xargs[xargs.length-1] * 50,
          yargs[yargs.length-1] * 50)
      }

      scope.makeMusic = function(){
        console.log(xargs);
        console.log(yargs);
        var d = new Date();
        var n = d.getTime();
        scope.isLoading = true;
        scope.data = {};
        scope.data.xargs = xargs;
        scope.data.yargs = yargs;
        scope.data.TIMESTAMP = n;
        $http({
          method: 'POST',
          url: '/goVoices',
          data: scope.data
        }).then(function successCallback(response) {
          MIDIjs.play('/engines/twoVoices-master/out/'+response.data+'/twoVoicesScore.midi');
          }, function errorCallback(response) {
            console.log(response);
          });
      }

      scope.remove = function(){
        xargs.pop();
        yargs.pop();
        drawBoard();
        drawList();
      }

      scope.clear = function(){
        xargs = [];
        yargs = [];
        drawBoard();
      }

      scope.preset = function(type){
        if(type == 0){
          xargs = [5,6,8,10,12,13]
          yargs = [13,11,9,8,6,4]
        }else if(type == 1){
          xargs = [1, 3, 5, 6, 8, 8, 13]
          yargs = [13, 13, 13, 11, 9, 8, 9]
        }else if(type == 2){
          xargs = [1, 3, 5, 6, 8, 10, 12,13,13,12,13]
          yargs = [1,2,1,1,2,4,6,8,9,11,13]
        }else if(type == 3){
          xargs = [3, 5, 6, 8, 10,3]
          yargs = [11,11,11,9,8,8]
        }else if(type == 4){
          xargs = [];
          yargs = [];
          for(var i = 0; i < 10; i ++){
            xargs.push(getRandomInt(1,13));
            yargs.push(getRandomInt(1,13));
          } 
        }
        drawBoard();
        drawList();
      }
      
      function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      function draw(lX, lY, cX, cY){
        ctx.beginPath();
        // line from
        ctx.moveTo(lX,lY);
        // to
        ctx.lineTo(cX,cY);
        // color
        ctx.strokeStyle = "#4bf";
        // draw it
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(lX, lY, 2, 0, 2 * Math.PI, false);
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#000000";
        ctx.stroke();
      }
    }
  };
}]);
