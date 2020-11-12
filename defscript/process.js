var sleep = require('sleep');
let fs = require('fs');
let util = require("util");
let http = require("http");
var request = require('sync-request');

var textVersion = require("textversionjs");

let contents = fs.readFileSync('charlist.txt', 'utf8');
let lines=contents.split("\n");

var results = {};

var styleConfig = {
    linkProcess: function(href, linkText){
        return linkText;
    },
    imgProcess: function(src,alt){
    	return alt;
    }
};

for (let i=0;i<lines.length;i++){
	let char = lines[i];
	char2 = encodeURIComponent(char)

	let options = {
	  host: 'rtega.be',
	  port: 80,
	  path: `/chmn/bare.php?c=${char2}`
	};

	let url = ``;

	let req = http.request(options, function(res) {
		let content = "";   
	    res.setEncoding("utf8");
	    res.on("data", function (chunk) {
	        content += chunk;
	    });
	    res.on("end", function () {
	    	let tv = textVersion(content,styleConfig);
	    	results[char]=tv;
	    	console.log(tv);
	    	console.log("\n\n\n")
	    });
	    sleep.msleep(200);
	});

	req.end();
}

