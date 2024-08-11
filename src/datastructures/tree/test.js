'use strict';
var beautify = require('../../util/beautify'),
    BinarySearchTree = require('./binarySearchTree'),
    Heap = require('./heap').Heap,
    MinHeap = require('./heap').MinHeap;


function testBinarySearchTree() {
    // var arr = [ 27, 14, 35, 10, 19, 31, 42 ];
    // var arr = [ 1, 2, 3, 4, 5, 6 ];
    var arr = [ 7, 6, 5, 14, 3, 22, 11 ];

    var binarySearchTree = new BinarySearchTree();
    for (var i=0; i < arr.length; i++){
        binarySearchTree.insert(arr[i]);
    }

    console.log('BinarySearchTree', JSON.stringify(binarySearchTree, null, '\t'));

    /*** Search ***/
    var searchData = 32;
    console.log('Search %d in tree', searchData);
    var resultNode = binarySearchTree.search(searchData);
    if(resultNode === null) {
        console.log('Element not found');
    } else {
        console.log('Element found ', resultNode.data);
    }

    /*** Min ***/
    var min = binarySearchTree.min();
    if(min === null) {
        console.log('Min : Empty tree');
    } else {
        console.log('Min value : ', min.data);
    }

    /*** Max ***/
    var max = binarySearchTree.max();
    if(max === null) {
        console.log('Max : Empty tree');
    } else {
        console.log('Max value : ', max.data);
    }
}


function testHeap() {
    var minHeap = new MinHeap('This is my MinHeap');
    var heap = new Heap('This is my Heap');
}

module.exports = function testTree() {

    /** Binary Search Tree **/
    // beautify(testBinarySearchTree);

    /** Heap **/
    beautify(testHeap);

};