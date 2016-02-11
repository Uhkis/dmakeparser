var makeparser = require('../makeparser.js');
var fs = require('fs');

var makefile = fs.readFileSync(__dirname + '/src/test.make').toString();
var parsed = makeparser.parse(makefile);

console.log(Object.keys(parsed).length === 7);
