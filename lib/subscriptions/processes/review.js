var Emitter = require('events').EventEmitter;
var util = require('util');

var ReviewProcess = functions( args ){
    // make sure app is valid
    // find next mission
    // make sure role is selected is available
    // make sure height / weight / age is right for role
    // accept the app with a message
    // deny the app with a message

};

util.inherits( ReviewProcess, Emitter );
module.exports = ReviewProcess;