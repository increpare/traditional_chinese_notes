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

	var res = request('GET', `http://rtega.be/chmn/bare.php?c=${char2}`);
	res=res.getBody();
	let tv = textVersion(res,styleConfig);
	console.log(tv);
	console.log("\n\n\n")

}

