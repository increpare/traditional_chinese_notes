let fs = require('fs');
var he = require('he');

let contents = fs.readFileSync('output.txt', 'utf8');
var dec = he.decode(contents);
console.log(dec);

