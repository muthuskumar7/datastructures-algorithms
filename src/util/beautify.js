'use strict';

/** Beautify function execution with dividers. **/
module.exports = function beautify(func) {

	//Return if function is not passed.
	if(typeof func !== 'function') {
		console.log('!!!!!@@@@@@', func, 'is not a function. beautify expects a function to be passed @@@@@@!!!!');
		return;
	}

	//Remove 'test' in the the function name and make the first character upper case.
	var funcName = func.name.replace(/^test/, '');
	funcName = funcName.slice(0,1).toUpperCase() + funcName.slice(1);

	//Execute function with dividers.
	console.log('\n**************', funcName , '**************\n');
	func();
	console.log('\n******************************************\n');
};