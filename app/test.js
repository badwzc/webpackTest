var tplCommon = require('./templates/common.js')
require('./style.css')
// Greeter.js
module.exports = function() {
  var greet = document.createElement('div');
  greet.textContent = tplCommon.test();
  return greet;
};