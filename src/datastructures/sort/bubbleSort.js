'use strict';
var swap = require('./swap');

module.exports = function bubbleSort(arr) {
    var swapped = false,
        iterationCount = 0;
    var sorting = function sort() {
        iterationCount++;
        console.log('Iteration - #' + iterationCount);

        //Reset swapped flag.
        swapped = false;

        for(var i = 0; i < arr.length-1; i++) {
            if(arr[i] > arr[i+1]) {
                swap(arr, i, i+1);
                swapped = true;
            }
        }

        console.log('Array after iteration %d : ', iterationCount, arr);

        //Return if no swapping happened
        if(!swapped) {
            return;
        }

        //Iterate
        sort();
    }();
};