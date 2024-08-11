'use strict';
var swap = require('./swap');

module.exports = function selectionSort(arr) {
    var sortedIndex = 0,
        iterationCount = 0;

    var sort = function sort() {
        iterationCount++;
        console.log('Iteration - #' + iterationCount);

        var leastItemIndex = sortedIndex;
        for(var i=sortedIndex; i < arr.length; i ++) {
            leastItemIndex = arr[leastItemIndex] <= arr[i] ? leastItemIndex : i;
        }
        if(leastItemIndex !== sortedIndex) {
            swap(arr, sortedIndex, leastItemIndex);    
        }
        sortedIndex++;

        console.log('Array after iteration %d : ', iterationCount, arr);

        if(sortedIndex === arr.length-1) {
            return;
        }

        //Iterate
        sort();

    }();
};