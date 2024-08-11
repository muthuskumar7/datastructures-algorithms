'use strict';

var Node = function (data){
    this.data = data,
    this.next = null
}


var SinglyLinkedList = function () {
    this._length = 0;
    this.head = null;
};

SinglyLinkedList.prototype = {
    add: function (value) {
        var node = new Node(value),
            currentNode = this.head;

        //Empty node
        if(!currentNode) {
            this.head = node;
            this._length++;
            return node;
        }

        //non-empty node
        //traverse to the end of the list.
        while(currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
        this._length++;

        return node;
    },
    remove: function() {
        var currentNode = this.head,
            previousNode = null;

        //Empty list
        if(!currentNode) {
            return currentNode;
        }

        //non-empty list with only one link
        if(this._length === 1) {
            this.head = null;
            this._length--;
            return null;

        }

        //non-empty list with more than one link
        while(currentNode.next) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = null;
        currentNode = null;
        this._length--;

        return currentNode;
    },
    reverse: function() {
        var currentNode = this.head,
            previousNode = null,
            tempNode = null;

        //Empty list or non-empty list with only one node.
        if(this._length <= 1) {
            return currentNode;
        }

        //non-empty list with more than one node.
        while(currentNode) {

            //save or not lose the next node
            tempNode = currentNode.next;
            
            //Reverse the pointer
            currentNode.next = previousNode;

            //Set previous node.
            previousNode = currentNode;

            //Retrieve or get back node chain.
            currentNode = tempNode;
        }

        //Set the reversed list to the head
        this.head = previousNode;

        return previousNode;
    },
    find: function(value) {
        var currentNode = this.head;
        while(currentNode) {
            if(currentNode.data === value){
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    },
    addFirst: function(value) {

        //Create new node
        var newNode = new Node(value);

        //Add to the first
        newNode.next = this.head;
        this.head = newNode;

        //Increase the length
        this._length++;

        return newNode; 
    },

    removeFirst: function(){
        if(this.head) {

            //Remove the first element
            this.head = this.head.next;
            
            //Decrement length
            this._length--;
            return this.head;
        }
        return null;
    },

    // Remove the node with only access to that node.
    removeNode: function(node) {
        if(!node) {
            return false;
        }
        var nextNode = node.next;
        if(nextNode) {
            node.data = nextNode.data;
            node.next = nextNode.next;
            return true;    
        }
        return false;
    },

    toString: function() {
        var display = [], 
            currentNode = this.head;
        while(currentNode) {
            display.push(currentNode.data);
            currentNode = currentNode.next;
        }
        return display.join(' => ');
    } 
};

module.exports = SinglyLinkedList;