'use strict';

module.exports = function mergeSort(arr) {
    var arr2=[];

    function merge(low, mid, high) {
        var i, j, k, l;

        console.log('Merging ', low, mid, high);

        //Loop through and sort.
        for(i=low, j=mid+1, k=low; (i<=mid && j<=high); k++) {
            if(arr[i] <= arr[j]) {
                arr2[k] = arr[i++];
            } else  {
                arr2[k] = arr[j++];
            }
        }

        //Add the remaining elements
        while(i<=mid) {
            arr2[k++] = arr[i++];
        }
        while(j<=high) {
            arr2[k++] = arr[j++];
        }

        //Apply the change to the original array
        for(l=low; l<=high; l++){
            arr[l] = arr2[l];
        }

        console.log('Array after merging ', arr);

        return;
    }


    var sort = function sort(low, high) {

        console.log('sort', low, high);

        //Divide array
        if(low < high) {

            //Find the mid position of array for dividing and merging.
            var mid = parseInt((low + high)/2);

            //Recursively divide the left part of array
            sort(low, mid)

            //Recursively divide the right part of array
            sort(mid+1, high);

            //Sort and merge the divided array
            merge(low, mid, high);
        } else {

            //Return if the array cannot be divided any more.
            return;
        }

    }(0, arr.length-1);
};