'use strict';

/** Circular Linkedlist based on SinglyLinkedList **/
var Link = function (key, value){
    this.data = { key: key, value: value };
    this.next = null;
};

var CircularLinkedList = function () {
    this.head = null;
    this._length = 0;
};

CircularLinkedList.prototype = {
    add: function(key, value) {
        var newLink = new Link(key, value),
            currentLink = this.head;

        if(!currentLink) {
            this.head = newLink;
            this.head.next = this.head;
            this._length++;
            return newLink;
        }

        //Traverse to the last link
        while(currentLink.next !== this.head) {
            currentLink = currentLink.next;
        }

        //Set next pointer to new link.
        currentLink.next = newLink;

        //Set next pointer of new link to head to make circular.
        newLink.next = this.head;

        //Increment length
        this._length++;

        return newLink;
    },

    reverse: function() {

        if(this._length <= 1) {
            return this.head;
        }

        var previousLink = this.head,
            currentLink = previousLink.next,
            tempLink = null;

        //Start from the element next to head to avoid changing the head.
        while(currentLink !== this.head) {
            
            //Save the next link.
            tempLink = currentLink.next;

            //Reverse the pointer
            currentLink.next = previousLink;

            //Move to next link in the list.
            previousLink = currentLink;
            currentLink = tempLink;
        }

        //Reverse the head pointer (current link is head)
        currentLink.next = previousLink;

        //Set the last element as head and complete the reverse operation.
        this.head = previousLink;

        return currentLink;
    },

    toString: function() {
        var display = [],
            currentLink = this.head;

        while(currentLink) {
            display.push(JSON.stringify(currentLink.data));

            if(currentLink.next === this.head) {
                currentLink = null;
            } else {
                currentLink = currentLink.next;    
            }
        }

        return display.join(' => ');
    }
};

module.exports = CircularLinkedList;