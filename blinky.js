// Import the interface to Tessel hardware
var tessel = require('tessel');

// Set the led pins as outputs with initial states
// Truthy initial state sets the pin high
// Falsy sets it low.
var led1 = tessel.led[0].output(0);
var led2 = tessel.led[1].output(1);

setInterval(function () {

    // Toggle the led states
    led1.toggle();
    led2.toggle();
}, 100);