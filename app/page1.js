require.ensure([], function(require) {
    var comm = require("./common.js");
    comm.doing();
    var greeter = require('./templates/index/greeting.hbs');
    var ask = require('./templates/index/ask.hbs');
    console.log(greeter(), ask())
    document.getElementById('root').appendChild(greeter());
})