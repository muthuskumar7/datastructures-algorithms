'use strict';

var fs = require('fs'),
    Promise = require('promise');

/* Use node version v4 and above for Promise global. or use require('promise') */

var doSomething = function () {
    return new Promise(function(resolve, reject) {
        console.log('doSomething');
        resolve('Promise 1 completed');
    });
}

var doSomethingElse = function (msg) {
    return new Promise(function(resolve, reject) {
        console.log('doSomethingElse');
        // setTimeout(function () {
        //     console.log('timeout completed');
            resolve(msg + ' Promise2 completed');
        // }, 2000);
    });
}



function testPromiseThen() {

    /* Whats the difference */

    doSomething().then(function (msg){
        return doSomethingElse(msg);
    }).then(function (msg){
        console.log(msg);
    });

    // doSomething().then(function (msg) {
    //     doSomethingElse(msg);
    // }).then(function (msg){
    //     console.log('Message at the end : ', msg);
    // });

    // doSomething().then(function (msg) {
    //     doSomethingElse;
    // }).then(function (msg){
    //     console.log('Message at the end : ', msg);
    // });

    // doSomething().then(doSomethingElse).then(function (msg){
    //     console.log('Message at the end : ', msg);
    // });
}

function testPromiseDenodify() {
    var fileName = process.cwd() + '/src/javascript/singleton.js';

    var readMyFile = function (fileName, callback) {
        fs.readFile(fileName, function (err, res) {
            if(err) {
                return callback(err);
            }
            try {
                res = JSON.parse(res);
            } catch (e) {
                return callback(e);
            }
            callback(null, res);
        });
    };

    var readFile = Promise.denodeify(fs.readFile);
    var readMyFileByPromise = function (fileName, callback) {
        readFile(fileName).then(function (res) {
            return res.toString();
        }).then(function (res) {
            callback(res);
        }).catch(function(e) {
            callback(e);
        });
    }


    // readMyFile(fileName, function (err, file) {
    //     console.log('Error ', err);
    //     console.log('file ', file);
    // });

    readMyFileByPromise(fileName, function (err, file) {
        console.log('Error ', err);
        console.log('file ', file);
    });
}


module.exports = function testPromise () {
    // testPromiseThen();
    testPromiseDenodify();
};



