var FE2_Req = require('./Lib.js');

///// 3 digit incremental consecutive
var index = 0;
var PINcodes = [];
for (index = 0 ; index < 1000 ; index++) {
	PINcodes.push(FE2_Req.PINCodeGenerator());
}

for (index = 0 ; index < 1000 ; index++) {
	console.log("PIN Code : " + PINcodes[index]);
}



