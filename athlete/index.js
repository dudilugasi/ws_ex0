/**
 * Created by dudi on 20/04/2015.
 */
//athlete module

//required modules
var util = require('util');
var events = require('events');
var fs = require('fs');

fs.open('log.txt','w',function(error, fd) {});

util.inherits(Athlete,events.EventEmitter);


// represent an athlete with medals
// inherits from EventEmitter
function Athlete() {
    this._medal = 0;
    events.EventEmitter.call(this);
}

//adds a medal and fire medalsChanged event
Athlete.prototype.addMedal = function() {
    this._medal += 1;
    this.emit('medalsChanged');
};

//subtract one medal and fire medalsChanged event
Athlete.prototype.subtractMedal = function() {
    this._medal -= 1;
    this.emit('medalsChanged');
};

//function that prints medal amount
function printMedal() {
    console.log("medals = ",this._medal);
    fs.appendFile('log.txt',"medals = " + this._medal + "\n");
}

//checks if the medals is under zero
function checkZero() {
    if (this._medal < 0) {
        console.log("medals is under 0");
        fs.appendFile('log.txt','medals is under 0\n');
    }
}

//exports new athlete object
exports.createAthlete = function() {
    var newAthlete = new Athlete();
    newAthlete.on('medalsChanged',printMedal);
    newAthlete.on('medalsChanged',checkZero);
    return newAthlete;
};



