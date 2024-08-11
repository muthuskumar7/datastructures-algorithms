'use strict';

/* Check if array is unique */
function isUnique(arr) {
    console.log('isUnique::Array :', arr);
    if(!arr || arr.length === 0) {
        return true;
    }
    for(var i=0; i < arr.length; i++) {
        if(arr.lastIndexOf(arr[i]) !== i) {
            return false;
        }
    }
    return true;
}

/* Reverse String */
function reverse(str) {
    console.log('Reverse::String :', str);
    if(!str) {
        return str;
    }
    var reversedString = '';
    for(var i = str.length -1; i >= 0; i--) {
        reversedString += str.charAt(i);
    }
    return reversedString;
}

/* Remove duplicate - in-place */
function removeDuplicateInPlace(arr) {
    console.log('Remove Duplicate in-place::Array: ', arr);
    if(!arr || arr.length < 2) {
        return arr;
    }

    var count = 0;
    for(var i=0; i< arr.length; i++){
        console.log('inside loop - ', ++count);
        
        // Identify duplicate element.
        if(arr.indexOf(arr[i]) !== i) {
            
            //Remove duplicate element.
            arr.splice(i, 1);

            //Reset index to previous index since the element has been removed from the array.
            i = i-1;
        }
    }

    return arr;
}

/* Find if strings are Anagrams */
function isAnagram(str1, str2) {
    console.log('isAnagram:: str1 : %s || str2: %s', str1, str2);

    if(!str1 || !str2 || str1.length !== str2.length) {
        return false;
    }

    //Convert string to array, sort and convert back to string.
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}



module.exports = function testArraysAndStrings() {

    // /* Unique */
    // var arr = ['a', 'b', 'c', 'd', 'e'];
    // console.log('isUnique ', isUnique(arr));

    // /* Reverse String */
    // var str = 'abcdef';
    // console.log('Reverse :', reverse(str));

    // /* Remove duplicate in-place */
    // var str = ['a', 'b', 'a', 'c', 'a', 'a', 'a'];
    // console.log('RemoveDuplicateInPlace :', removeDuplicateInPlace(str));

    // /* Remove duplicate in-place */
    // var str1 = 'ab', str2 = 'ba';
    // console.log('isAnagram :', isAnagram(str1, str2));

    /* Replace string */
    var str = ' a b ';
    console.log('Replace space with %20 :', str.replace(/ /g, '%20'));
}