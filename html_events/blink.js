var Gpio = require('onoff').Gpio,  
  led = new Gpio(4, 'out'),      // Export GPIO #14 as an output. 
  iv;
iv = setInterval(function () {
  led.writeSync(led.readSync() ^ 1); // 1 = on, 0 = off :) 
}, 200);
 
// Stop blinking the LED and turn it off after 5 seconds. 
setTimeout(function () {
  clearInterval(iv); // Stop blinking 
  led.writeSync(0);  // Turn LED off. 
  led.unexport();    // Unexport GPIO and free resources 
}, 900000);
