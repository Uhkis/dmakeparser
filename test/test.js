var dmakeparser = require('../dmakeparser.js');
var fs = require('fs');

var makefile = fs.readFileSync(__dirname + '/src/test.make').toString();
var parsed = dmakeparser.parse(makefile);

console.log(Object.keys(parsed).length === 7);
