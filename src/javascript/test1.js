'use strict';

var Singleton = require('./singleton');

module.exports = function () {
	var singleton = new Singleton();
	console.log('singleton in test1.js ', singleton.info);
}