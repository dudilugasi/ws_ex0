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

//exports new athlete object
exports.createAthlete = function() {
  return new Athlete();
};



//function that prints medal amount
exports.printMedal = function() {
    console.log("medals = ",this._medal);
    fs.appendFile('log.txt',"medals = " + this._medal + "\n");
};

//checks if the medals is under zero
exports.checkZero = function() {
    if (this._medal < 0) {
        console.log("medals is under 0");
        fs.appendFile('log.txt','medals is under 0\n');
    }

};

