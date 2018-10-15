'use strict';

var s = 'Hello';

function greet(name) {
    console.log(s + ', ' + name + '!');
}

process.nextTick(function () {
	// body...
	console.log('nextTick');
});
	console.log('00000');

module.exports = greet;