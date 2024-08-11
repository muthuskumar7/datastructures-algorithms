'use strict';
var swap = require('./swap');

module.exports = function quickSort(arr) {

    function partition(left, right, pivot) {

        console.log('******* Start of partition *******');
        console.log('partition ', left, right, pivot);
        console.log('Array before partioning ', arr);

        var pivotIndex = right,
            right = right-1;

        while(true) {
            //move left pointer to the point where item is greater than pivot.
            //left should not go beyond pivot index.
            while(left < pivotIndex && arr[left] <= pivot) {
                left++;
            }

            //move right pointer to the point where item is less than pivot.
            //right should not go beyond starting index.
            while(right > 0 && arr[right] >= pivot) {
                right--;
            }

            console.log('in while - left, right', left, right);

            //if right and left crossed/meet each other. break
            if(left >= right) {
                break;
            } else {
                console.log('items swapped ', arr[left], arr[right]);
                
                //Swap left and right items. when left is greater than pivot and right is lesser than pivot.
                swap(arr, left, right);

                //Move the pointers.
                left++; right--;
            }
        }

        console.log('left right pivotIndex', left, right, pivotIndex);
        // console.log('left right pointers', left, pivotIndex);

        console.log('pivot swapped', arr[left], arr[pivotIndex]);
        //Set the new pivot by swapping the existing one.
        swap(arr, left, pivotIndex);

        console.log('Array after partioning ', arr);

        console.log('******* End of partition *******\n');

        //Return the new pivot index.
        return left;   
    }

    var sort = function sort(left, right) {

        //Exit when partition reaches the end of the array(left partition to the left end and right partition to the right end).
        if(right-left <= 0) {
            return;
        }

        //Choose last element as pivot by default.
        var pivot = arr[right];
        
        //Partioning the array in such a way, the items lesser than pivot are in the left and items greater than pivot are in the right side of the array.
        var partitionIndex = partition(left, right, pivot);

        //Recursively partition the left side.
        sort(left, partitionIndex-1);

        //Recursively partition the right side.
        sort(partitionIndex, right);

    }(0, arr.length-1);

};