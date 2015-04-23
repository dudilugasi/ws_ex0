
var http = require('http');
var athlete = require('./athlete');
var fs = require('fs');

//get new athlete
var federer = athlete.createAthlete();

federer.addMedal(); // output : medals = 1
federer.addMedal(); // output : medals = 2
federer.subtractMedal();//output : medals = 1
federer.subtractMedal();//output : medals = 0
federer.subtractMedal();// output : medals = -1 ; medals is under 0

//creates a server that listens on port 3000
http.createServer(function(res,req) {
    fs.readFile('log.txt', function(err,data) {
        req.writeHeader(200);
        req.end('success\n' + data);
    });
}).listen(3000);

console.log('server listens on port 3000');

