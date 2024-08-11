'use strict';

/** Node of the tree **/
var Node = function (data) {
    this.data = data;
    this.left = null;
    this.right = null;
};

/** BinarySearchTree **/
var BinarySearchTree = function (rootData) {
    if(rootData !== undefined || rootData !== null) {
        this.root = new Node(rootData);
    }
    this.root = null;
};

BinarySearchTree.prototype = {
    insert: function (data) {
        var newNode = new Node(data);

        /** Tree is empty **/
        if(this.root === null) {
            this.root = newNode;
            return;
        }

        /** Tree has root node **/
        var currentNode = this.root;
        while(true) {

            /** if data is less than node's data, traverse left **/
            if(data < currentNode.data) {

                /** Located end of tree. Add new Node **/
                if(currentNode.left === null) {
                    currentNode.left = newNode;
                    return;
                } 
            
                /** Move to next node **/
                currentNode = currentNode.left;
                
            } else { /** if data is greater than node's data, traverse right **/

                /** Located end of tree. Add new Node **/
                if(currentNode.right === null) {
                    currentNode.right = newNode;
                    return;
                } 

                /** Move to next node **/
                currentNode = currentNode.right;    
            }
        }
    },
    search: function(data) {
        var currentNode = this.root,
            searchLog = 'Visiting Elements : ';
        
        while(currentNode !== null){
            if(currentNode.data === data) {
                
                //Just logging. nothing important.
                searchLog += '[ ' + currentNode.data + ' ]';
                console.log(searchLog);

                return currentNode;
            }

            //Just logging. nothing important.
            searchLog += currentNode.data + ' -> ';

            if(data < currentNode.data) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }

        searchLog += '[ x ]';
        console.log(searchLog);

        return null;
    },

    min: function () {
        var currentNode = this.root;

        /** Empty tree **/
        if(currentNode === null) {
            return null;
        }

        /** Traverse to left most to get the minimum value **/
        while(currentNode.left !== null) {
            currentNode = currentNode.left;
        }
        return currentNode;
    },

    max: function () {
        var currentNode = this.root;

        /** Empty tree **/
        if(currentNode === null) {
            return null;
        }

        /** Traverse to the right most to get the minimum value **/
        while(currentNode.right !== null) {
            currentNode = currentNode.right;
        }
        return currentNode;
    }

};

module.exports = BinarySearchTree;