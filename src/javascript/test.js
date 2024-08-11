'use strict';


// /** Scopes **/

// /* Variables are not scoped block level. */
// var i=1000;
// for(var i=0; i<10; i++){
//     //do nothing;
// }
// // Prints value 10 not 1000.
// console.log(i);

// //Another example.
// //Variables declared inside the block are scoped outside.
// //In this case, it scoped global level. 
// for(var j=0; j<20; j++){
//     //Do nothing.
// }
// function testScopeOfj(){
//     //Prints value of j, 20. even though j is declared inside for block.
//     console.log(j);
//     return;
// }
// testScopeOfj();


// //SetTimeout
// var name='Muthu';

// var myObj = {
//     name: 'Muthu',
//     getName: function(){
//         return this.name;
//     },
//     printName: function() {
//         setTimeout(function() {
//             console.log(this.name);
//             console.log(this);
//         }, 200);
//         return 'wait for timeout to finish';
//     }
// };

// // console.log('Print name in myObj scope :', myObj.getName());
// // console.log('Print name in myObj setTimeout scope :', myObj.printName());


// /** Variable Hoisting **/
// function fnfirstName() {

//     // Prints undefined. 
//     //if the variable 'firstName' is not declared below, throws unknown reference error.
//     // It doesn't matter if this is run in strict mode or not. same result.
//     console.log(firstName); 
//     var firstName = 'Muthukumar';
//     console.log(firstName);
// }
// console.log('Variable hoisting ', fnfirstName());

// /** Function or Variable precedence in Variable hoisting. **/

// //When variable is declared, in variable hoisting, function takes precedence.
// //Doesn't matter which one comes first. function takees precedence.
// var myVariable;
// function myVariable(){};
// console.log('myVariable type ', typeof myVariable); //Prints function

// function myVariable1(){};
// var myVariable1;
// console.log('myVariable1 type ', typeof myVariable1); //Prints function

// //If variable is initialized, then variable takes precedence.
// var myVariable2 = 'Myvariable 2';
// function myVariable2() {
//     console.log('myVariable2 function');
// }
// console.log('myVariable2 type ', typeof myVariable2); //Prints string.


// setTimeout(function () {
//     console.log(this.myVariable2);
// }, 500);




// var val = 'true';
// console.log((false == 0));

// var val = [];
// console.log(typeof val);

// // myname = 'Muthu';
// // console.log(myname);


// var arr = [1,2,3];
// console.log(Math.max.apply(null, arr));


// /** END of Variables are not scoped block level. **/


/* Singleton */


// var SingletonObj = require('./singleton');

// console.log(SingletonObj);

// var Singleton2 = require('./singleton');

// console.log(Singleton2);

// var Singleton = require('./singleton');

// var singleton1 = new Singleton();
// console.log('singleton1 info : ', singleton1.info);
// singleton1.info = 'this is singleton1';
// console.log('singleton1 after setting info : ', singleton1.info);

// var singleton2 = new Singleton();
// console.log('singleton2 info : ', singleton2.info);
// // singleton2.info = 'this is singleton2';
// // console.log('singleton2 after setting info : ', singleton2.info);

// console.log('is Same instance ?     ', singleton1 === singleton2);

// var test1 = require('./test1');

// test1();

// console.log('muthu'.split('').reverse().join(''));
// var num = 808;
// console.log(num.toString().split('').map(function (i) {
//     return parseInt(i);
// }));



var testArraysAndStrings = require('./solve/arrays'),
	testPromise = require('./promise'),
	beautify = require('../util/beautify');

module.exports = function testJavascript() {
	beautify(testArraysAndStrings);
	beautify(testPromise);
};