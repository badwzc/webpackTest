//main.js
require("./style.css");
require.ensure([], function(require) {
    var greeter = require('./Greeter.js');
    document.getElementById('root').appendChild(greeter());
})