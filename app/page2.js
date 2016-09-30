require.ensure([], function(require) {
    var comm = require("./common.js");
    comm.done();
    var test = require('./templates/common/test.hbs');
    document.getElementById('root').appendChild(test());
})