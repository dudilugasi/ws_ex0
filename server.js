
var http = require('http');
var athlete = require('./athlete');
var fs = require('fs');

//get new athlete
var federer = athlete.createAthlete();

//attach function to the medalChanged event
federer.on('medalsChanged',athlete.printMedal);
federer.on('medalsChanged',athlete.checkZero);


federer.addMedal(); // output : medals = 1
federer.addMedal(); // output : medals = 2
federer.subtractMedal();//output : medals = 1
federer.subtractMedal();//output : medals = 0
federer.subtractMedal();// output : medals = -1 ; medals is under 0

//write to log from log.txt
var log = "";
var stream = fs.createReadStream('log.txt').on('data',function(chunk) {
    log += chunk;
});
stream.read();


//creates a server that listens on port 3000
http.createServer(function(res,req) {

    //callback functions on new request
    req.writeHeader(200);
    req.end('success\n' + log);

}).listen(3000);


