'use strict';

function swapData(node1, node2) {
    node1.data = node1.data + node2.data;
    node2.data = node1.data - node2.data;
    node1.data = node1.data - node2.data;
}


var Node = function (data) {
    this.data = data;
    this.left = left;
    this.right = right;
};

var Heap = function () {
    this.root = null;
};
Heap.prototype = {
    toString: function () {
        return JSON.stringify(this.root, null, '\t');
    }
}


var MinHeap = function() {
    
    //Call parent constructor
    Heap.apply(this, arguments);
};
MinHeap.prototype = Object.assign({}, Heap.prototype, {
    insert: function(data) {
        var newNode = new Node(data);

        //Empty Heap
        if(this.root === null) {
            this.root = newNode;
            return;
        }

        //Heap has root
        var currentNode = this.root,
            parentNode = null;
        while(currentNode !== null) {
            if(newNode.data < currentNode) {
                swapData(this.root, newNode);
            }
            if(currentNode.left === null) {
                currentNode.left = newNode;
                return;
            }
            if(currentNode.right === null) {
                currentNode.right = newNode;
                return;
            }

            if(parentNode !== null) {
                currentNode = parentNode.right;
            } else {
                parentNode = currentNode;
                currentNode = currentNode.left;    
            }

            

        }


    }
});





module.exports = {
    Heap: Heap,
    MinHeap: MinHeap
};