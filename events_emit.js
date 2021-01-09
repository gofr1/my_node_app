// Every action on a computer is an event. 
// Like when a connection is made or a file is opened.

// Node.js has a built-in module, called "Events", where you can create-, fire-, and listen for- your own events.
var events = require('events');
var eventEmitter = new events.EventEmitter();

// Create an event handler
var screamEventHandler = function () {
  console.log('Aaaaaaa!');
}

// Assign the event handler to an event
eventEmitter.on('scream', screamEventHandler);

// Fire the 'scream' event:
eventEmitter.emit('scream');