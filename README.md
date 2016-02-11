# dmakeparser
Parses Drupal 7 makefiles to a simple javascript object.

## Usage
```javascript
var dmp = require('dmakeparser.js');
var fs = require('fs');

var makefile = fs.readFileSync(PATH_TO_MAKEFILE).toString();
var parsed = dmp.parse(makefile);
```
