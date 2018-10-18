'use strict';

var greet = require('./hello');
var readfile = require('./readfile');

var s = '小北' ;
greet(s);

// readfile('read');
readfile.readFile('write','小北最帅，6不6');
readfile.fileStream()
//
//


