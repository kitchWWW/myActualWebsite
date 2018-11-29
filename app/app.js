var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs")
    port = process.env.PORT || 3000;

const runSpawn = require('child_process').spawn;

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

fs.writeFile("server.log","Starting Log...",function(err){});

const testSpawn = require('child_process').spawn;
const testCode = testSpawn('./test.sh');
testCode.stdout.on('data', function (data) {
  serverLog('Test stdout: ' + data.toString());
});
testCode.stderr.on('data', function (data) {
  serverLog('Test stderr: ' + data.toString());
});

function serverLog(data){
  console.log("***"+ Date.now()+" "+data);
}



http.createServer(function(request, response) {
  serverLog(request.method);
  serverLog(request.url);
  if(request.method==="GET"){
    var uri = url.parse(request.url).pathname
      , filename = path.join(process.cwd(), uri);

    if(request.url == "/sonata"){
      response.writeHead(302, {
        'Location': '/#!/genSon'
      });
      response.end();
      return;
    }
    if(request.url == "/reflections"){
      response.writeHead(302, {
        'Location': '/#!/reflections'
      });
      response.end();
      return;
    }
    if(request.url == "/smallMusic"){
      response.writeHead(302, {
        'Location': '/#!/smallMusic'
      });
      response.end();
      return;
    }
    if(request.url == "/threeNotes"){
      response.writeHead(302, {
        'Location': '/#!/threenotes'
      });
      response.end();
      return;
    }
    if(request.url == "/threenotes"){
      response.writeHead(302, {
        'Location': '/#!/threenotes'
      });
      response.end();
      return;
    }
    if(request.url == "/melody"){
      response.writeHead(302, {
        'Location': '/#!/genMel'
      });
      response.end();
      return;
    }
    fs.exists(filename, function(exists) {
      if(!exists) {
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not Found\n");
        response.end();
        return;
      }

      if (fs.statSync(filename).isDirectory()) filename += '/index.html';

      fs.readFile(filename, "binary", function(err, file) {
        if(err) {        
          response.writeHead(500, {"Content-Type": "text/plain"});
          response.write(err + "\n");
          response.end();
          return;
        }

        response.writeHead(200);
        response.write(file, "binary");
        response.end();
      });
    });
  }

  if(request.method==="POST"){
    if(request.url ==="/goSonata"){
       console.log('Request Sonata recieved.');
        var requestBody = '';
        request.on('data', function(data) {
          requestBody += data;
          if(requestBody.length > 1e7) {
            response.writeHead(413, 'Request Entity Too Large', {'Content-Type': 'text/html'});
            response.end('<!doctype html><html><head><title>413</title></head><body>413: Request Entity Too Large</body></html>');
          }
        });

        request.on('end', function() {
        var data = JSON.parse(requestBody);
        console.log(data)
        const runCode = runSpawn('./runSonata.sh',[
          data.TIMESTAMP,
          data.KEY,
          data.PTtype,
          data.STtype,
          data.analyze
          ]);
        runCode.stdout.on('data', function (data) {
          serverLog('stdout: ' + data.toString());
        });
        runCode.stderr.on('data', function (data) {
          serverLog('stderr: ' + data.toString());
        });
        runCode.on('close', (code) => {
          console.log(`child process exited with code ${code}`);
          response.writeHead(200, {"Content-Type": "text/plain"});
          response.write(''+data.TIMESTAMP);
          serverLog(`child process exited with code ${code}`);
          response.end();
        });
        runCode.on('error', (err) => {
          serverLog(err);
          console.log('what is going on');
          console.log(err);
        });
      });
    }else if(request.url ==="/goConcerto"){
       console.log('Request Concerto recieved.');
        var requestBody = '';
        request.on('data', function(data) {
          requestBody += data;
          if(requestBody.length > 1e7) {
            response.writeHead(413, 'Request Entity Too Large', {'Content-Type': 'text/html'});
            response.end('<!doctype html><html><head><title>413</title></head><body>413: Request Entity Too Large</body></html>');
          }
        });

        request.on('end', function() {
        var data = JSON.parse(requestBody);
        console.log(data)
        labels = []
        for(var i = 0; i < data.waysToPlay.length; i++){
          labels.push('A_LABEL_TO_USE_'+data.waysToPlay[i].way.replaceAll(' ','_SPACE_')
            .replaceAll(',','_COMMA_')
            .replaceAll('.','_FULLSTOP_')
            .replaceAll('(','_LPAREN_')
            .replaceAll(')','_RPAREN_'))
        }
        var args = [
          data.TIMESTAMP,
          data.favoritePitch,
          data.clefToUse,
          data.lowestAccomp,
          data.highestAccomp
          ];
        serverLog(args.concat(labels))
        const runCode = runSpawn('./runConcerto.sh',args.concat(labels));
        runCode.stdout.on('data', function (data) {
          serverLog('stdout: ' + data.toString());
        });
        runCode.stderr.on('data', function (data) {
          serverLog('stderr: ' + data.toString());
        });
        runCode.on('close', (code) => {
          console.log(`child process exited with code ${code}`);
          response.writeHead(200, {"Content-Type": "text/plain"});
          response.write(''+data.TIMESTAMP);
          serverLog(`child process exited with code ${code}`);
          response.end();
        });
        runCode.on('error', (err) => {
          serverLog(err);
          console.log('what is going on');
          console.log(err);
        });
      });
    }else if(request.url ==="/goThreeNotes"){
       console.log('Request Three Notes recieved.');
        var requestBody = '';
        request.on('data', function(data) {
          requestBody += data;
          if(requestBody.length > 1e7) {
            response.writeHead(413, 'Request Entity Too Large', {'Content-Type': 'text/html'});
            response.end('<!doctype html><html><head><title>413</title></head><body>413: Request Entity Too Large</body></html>');
          }
        });

        request.on('end', function() {
        var data = JSON.parse(requestBody);
        console.log(data)
        const runCode = runSpawn('./runThreeNotes.sh',[
          data.TIMESTAMP,
          data.clefToUse,
          data.NAME,
          ]);
        runCode.stdout.on('data', function (data) {
          serverLog('stdout: ' + data.toString());
        });
        runCode.stderr.on('data', function (data) {
          serverLog('stderr: ' + data.toString());
        });
        runCode.on('close', (code) => {
          console.log(`child process exited with code ${code}`);
          response.writeHead(200, {"Content-Type": "text/plain"});
          response.write(''+data.TIMESTAMP);
          serverLog(`child process exited with code ${code}`);
          response.end();
        });
        runCode.on('error', (err) => {
          serverLog(err);
          console.log('what is going on');
          console.log(err);
        });
      });
    }else if(request.url ==="/goReflections"){
       console.log('Request Reflections recieved.');
        var requestBody = '';
        request.on('data', function(data) {
          requestBody += data;
          if(requestBody.length > 1e7) {
            response.writeHead(413, 'Request Entity Too Large', {'Content-Type': 'text/html'});
            response.end('<!doctype html><html><head><title>413</title></head><body>413: Request Entity Too Large</body></html>');
          }
        });

        request.on('end', function() {
        var data = JSON.parse(requestBody);
        console.log(data)
        const runCode = runSpawn('./runReflections.sh',[
          data.TIMESTAMP,
          data.LOW,
          data.HIGH,
          data.MID,
          data.STAFF
          ]);
        runCode.stdout.on('data', function (data) {
          serverLog('stdout: ' + data.toString());
        });
        runCode.stderr.on('data', function (data) {
          serverLog('stderr: ' + data.toString());
        });
        runCode.on('close', (code) => {
          console.log(`child process exited with code ${code}`);
          response.writeHead(200, {"Content-Type": "text/plain"});
          response.write(''+data.TIMESTAMP);
          serverLog(`child process exited with code ${code}`);
          response.end();
        });
        runCode.on('error', (err) => {
          serverLog(err);
          console.log('what is going on');
          console.log(err);
        });
      });
    }else if(request.url ==="/goSmallMusic"){
       console.log('Request Small Music recieved.');
        var requestBody = '';
        request.on('data', function(data) {
          requestBody += data;
          if(requestBody.length > 1e7) {
            response.writeHead(413, 'Request Entity Too Large', {'Content-Type': 'text/html'});
            response.end('<!doctype html><html><head><title>413</title></head><body>413: Request Entity Too Large</body></html>');
          }
        });

        request.on('end', function() {
        var data = JSON.parse(requestBody);
        console.log(data)
        const runCode = runSpawn('./runSmallMusic.sh',[
          data.TIMESTAMP
          ]);
        runCode.stdout.on('data', function (data) {
          serverLog('stdout: ' + data.toString());
        });
        runCode.stderr.on('data', function (data) {
          serverLog('stderr: ' + data.toString());
        });
        runCode.on('close', (code) => {
          console.log(`child process exited with code ${code}`);
          response.writeHead(200, {"Content-Type": "text/plain"});
          response.write(''+data.TIMESTAMP);
          serverLog(`child process exited with code ${code}`);
          response.end();
        });
        runCode.on('error', (err) => {
          serverLog(err);
          console.log('what is going on');
          console.log(err);
        });
      });
    }else if(request.url ==="/goVoices"){
       console.log('Request Voices recieved.');
        var requestBody = '';
        request.on('data', function(data) {
          requestBody += data;
          if(requestBody.length > 1e7) {
            response.writeHead(413, 'Request Entity Too Large', {'Content-Type': 'text/html'});
            response.end('<!doctype html><html><head><title>413</title></head><body>413: Request Entity Too Large</body></html>');
          }
        });
        request.on('end', function() {
        var data = JSON.parse(requestBody);
        console.log(data)
        const runCode = runSpawn('./runVoices.sh',[
          data.TIMESTAMP,
          data.xargs,
          data.yargs
          ]);
        runCode.stdout.on('data', function (data) {
          serverLog('stdout: ' + data.toString());
        });
        runCode.stderr.on('data', function (data) {
          serverLog('stderr: ' + data.toString());
        });
        runCode.on('close', (code) => {
          console.log(`child process exited with code ${code}`);
          response.writeHead(200, {"Content-Type": "text/plain"});
          response.write(''+data.TIMESTAMP);
          serverLog(`child process exited with code ${code}`);
          response.end();
        });
        runCode.on('error', (err) => {
          serverLog(err);
          console.log('what is going on');
          console.log(err);
        });
      });
    }else if (request.url === "/goMelody") {
      console.log('Request Melody recieved.');
      var requestBody = '';
      request.on('data', function(data) {
        requestBody += data;
        if(requestBody.length > 1e7) {
          response.writeHead(413, 'Request Entity Too Large', {'Content-Type': 'text/html'});
          response.end('<!doctype html><html><head><title>413</title></head><body>413: Request Entity Too Large</body></html>');
        }
      });
      request.on('end', function() {
        var data = JSON.parse(requestBody);
        const runCode = runSpawn('./runMelody.sh',[
          data.DATASET_SIZE,
          data.ITERATIONS,
          data.TIMESTAMP,
          data.RANK_STARTDO,
          data.RANK_ENDDO,
          data.RANK_SECOND_TO_LAST,
          data.RANK_CHORD_TONE_STRONG,
          data.RANK_CHORD_TONE_GEN,
          data.RANK_DIATONIC_EVER,
          data.RANK_STEPWISE,
          data.RANK_CHORDAL_LEAP,
          data.RANK_LEAP_PUNISH_R1,
          data.RANK_LEAP_PUNISH_R2,
          data.RANK_LEAP_PUNISH_R3,
          data.RANK_LEAP_PUNISH_R4,
          data.RANK_LEAP_PUNISH_TRI,
          data.RANK_CHANGE_ON_STRONG,
          data.RANK_CHANGE_FROM_PREV_STRONG,
          data.RANK_QUARTER_NOTE_REWARD,
          data.RANK_DOUBLE_EIGHT_REWARD,
          data.RANK_RANGE_REWARD,

          data.firstNote,
          data.lastNote,
          data.lowestNote,
          data.highestNote,

          data.SCALE_0,
          data.SCALE_1,
          data.SCALE_2,
          data.SCALE_3,
          data.SCALE_4,
          data.SCALE_5,
          data.SCALE_6,
          data.SCALE_7,
          data.SCALE_8,
          data.SCALE_9,
          data.SCALE_10,
          data.SCALE_11,

          data.M1_CHORD_0,
          data.M1_CHORD_1,
          data.M1_CHORD_2,
          data.M1_CHORD_3,
          data.M1_CHORD_4,
          data.M1_CHORD_5,
          data.M1_CHORD_6,
          data.M1_CHORD_7,
          data.M1_CHORD_8,
          data.M1_CHORD_9,
          data.M1_CHORD_10,
          data.M1_CHORD_11,

          data.M2_CHORD_0,
          data.M2_CHORD_1,
          data.M2_CHORD_2,
          data.M2_CHORD_3,
          data.M2_CHORD_4,
          data.M2_CHORD_5,
          data.M2_CHORD_6,
          data.M2_CHORD_7,
          data.M2_CHORD_8,
          data.M2_CHORD_9,
          data.M2_CHORD_10,
          data.M2_CHORD_11,

          data.M3_CHORD_0,
          data.M3_CHORD_1,
          data.M3_CHORD_2,
          data.M3_CHORD_3,
          data.M3_CHORD_4,
          data.M3_CHORD_5,
          data.M3_CHORD_6,
          data.M3_CHORD_7,
          data.M3_CHORD_8,
          data.M3_CHORD_9,
          data.M3_CHORD_10,
          data.M3_CHORD_11,

          data.M4_CHORD_0,
          data.M4_CHORD_1,
          data.M4_CHORD_2,
          data.M4_CHORD_3,
          data.M4_CHORD_4,
          data.M4_CHORD_5,
          data.M4_CHORD_6,
          data.M4_CHORD_7,
          data.M4_CHORD_8,
          data.M4_CHORD_9,
          data.M4_CHORD_10,
          data.M4_CHORD_11

          ]);
        runCode.stdout.on('data', function (data) {
          serverLog('stdout: ' + data.toString());
        });
        runCode.stderr.on('data', function (data) {
          serverLog('stderr: ' + data.toString());
        });
        runCode.on('close', (code) => {
          console.log(`child process exited with code ${code}`);
          response.writeHead(200, {"Content-Type": "text/plain"});
          response.write(''+data.TIMESTAMP);
          serverLog(`child process exited with code ${code}`);
          response.end();
        });
        runCode.on('error', (err) => {
          serverLog(err);
          console.log('what is going on');
          console.log(err);
        });
        
      });
    } else {
      response.writeHead(404, 'Resource Not Found', {'Content-Type': 'text/html'});
      response.end('<!doctype html><html><head><title>404</title></head><body>404: Resource Not Found</body></html>');
    }
  }

}).listen(parseInt(port, 10));

console.log("Server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");