# dmakeparser
Parses Drupal 7 makefiles to a simple javascript object.

## Installation & Usage
Install with npm:
```
npm install uhkis/dmakeparser
```

Use:
```javascript
var dmp = require('dmakeparser');
var fs = require('fs');

var makefile = fs.readFileSync(PATH_TO_MAKEFILE).toString();
var parsed = dmp.parse(makefile);
```
