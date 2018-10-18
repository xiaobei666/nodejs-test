'use strict';
// 测试nodejs 读写文件

var fs = require('fs');

function readFile (stats, datatxt) {
	// body...
	if (stats ==='read') {
		fs.readFile('sample.jpg', function (err, data) {
		    if (err) {
		        console.log(err);
		    } else {
		        console.log(data);
		        console.log(data.length + ' bytes');
		    }
		});
	}else{
		fs.writeFile('test.txt', datatxt, function (err, data) {
		    if (err) {
		        console.log(err);
		    } else {
		        console.log('ok.~~ 写入成功');
		    }
		});
	}

}

// 文件流
function fileStream () {
	// body...
	// 打开一个流:
	var rs = fs.createReadStream('test.txt');

	rs.on('data', function (chunk) {
	    console.log('DATA:')
	    console.log(chunk);
	});

	rs.on('end', function () {
	    console.log('END');
	});

	rs.on('error', function (err) {
	    console.log('ERROR: ' + err);
	});

}


module.exports = {
	fileStream: fileStream,
	readFile: readFile,

};