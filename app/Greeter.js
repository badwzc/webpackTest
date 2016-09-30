var tplIndex = require('./templates/index.js')
require('./style.css')
// Greeter.js
module.exports = function() {
  var greet = document.createElement('div');
  greet.textContent = tplIndex.greeting();
  greet.textContent = tplIndex.ask();
  return greet;
};