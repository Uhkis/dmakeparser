var makeparser = {
  parse: function(makefile) {
    var lines = makefile.split('\n');
    var parsed = {};
    for (x in lines) {
      var parsedLine = this.parseLine(lines[x]);
      if (parsedLine) {
        parsed[Object.keys(parsedLine)[0]] = parsedLine[Object.keys(parsedLine)[0]];
      }
    }
    return parsed;
  },
  parseLine: function(line) {
    if (this.detectVersionLine(line)) {
      var parsedLine = {};
      var cleanLine = this.cleanProjectLine(line);
      var parts = cleanLine.split(' ');
      parsedLine[parts[0]] = parts[1];
      return parsedLine;
    }
  },
  cleanProjectLine: function(projectline) {
    projectline = projectline.replace('projects[', '');
    projectline = projectline.replace(/\]/g, '');
    projectline = projectline.replace(' =', '')
    projectline = projectline.replace('[version', '');
    projectline = projectline.replace(/["]+/g, '');
    return projectline;
  },
  detectVersionLine: function(line) {
    line = line.trim();
    if (line.search('projects') === -1 || line[0] == ';') {
      return false;  
    }
    if (line.search('version') !== -1) {
      return true;
    }
    if (line.search(/\]\[/g) === -1) {
      return true;
    }
    return false;
  }
}

module.exports = makeparser;
