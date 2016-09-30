require.ensure([], function(require) {
    var comm = require("./common.js");
    comm.doing();
    var greeter = require('./templates/index/greeting.hbs');
    console.log(greeter())
    document.getElementById('root').appendChild(greeter());
})