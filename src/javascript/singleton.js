'use strict';

// var SingletonObject = (function () {
//  var singletonVariable;

//  console.log('SingletonVariable ', singletonVariable);

//  singletonVariable = {
//      value: 'it is initialized now'.
//  };

//  return singletonVariable;
// })();


// var SingletonClass = function () {
//     var instance;


//     return Singleton;

// }();


var instance;

var Singleton = function () {
    if(instance) {
        return instance;
    }
    instance = this;
    return instance;
};

module.exports = Singleton;