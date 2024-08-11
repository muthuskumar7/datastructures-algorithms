'use strict';

/**** Doubly Linked List ****/

var DoublyLink = function(key, value){
    this.data = {
        key: key,
        value: value
    };
    this.next = null;
    this.previous = null;
}

var DoublyLinkedList = function(){
    this.head = null;
    this._length = 0;
}

DoublyLinkedList.prototype = {
    add: function(key, value){
        var link = new DoublyLink(key, value);
        var currentLink = this.head;

        //Empty list
        if(!currentLink) {
            this.head = link;
            this._length++;
            return link;
        }

        //non-emtpy list

        //Traverse to the end of the list
        while(currentLink.next) {
            currentLink = currentLink.next;
        }

        //Add forward pointer
        currentLink.next = link;

        //Add backward pointer
        link.previous = currentLink;
        this._length++;
        return link;
    },

    remove: function() {
        var currentLink = this.head,
            previousLink = null;

        //Empty list
        if(!currentLink) {
            return currentLink;
        }

        //List with only one link
        if(this._length === 1) {
            //Emptying the List
            this.head = null;
            this._length--;
            return this.head;
        }

        //Travers to the end of the list
        while(currentLink.next) {
            previousLink = currentLink;
            currentLink = currentLink.next;
        }

        //Remove backward link
        currentLink.previous = null;
        
        //Remove forward link
        previousLink.next = null;
        
        //Decrement length
        this._length--;

        //Deallocate memory
        currentLink = null;

    },

    addAfter: function(key, data) {
        var currentLink = this.head,
            keyLink =null,
            nextLink = null,
            newLink = new DoublyLink(data.key, data.value);

        while(currentLink) {
            if(currentLink.data.key === key) {
                keyLink = currentLink;
                nextLink = currentLink.next;
                break;
            }
            currentLink = currentLink.next;
        }

        if(!keyLink) {
            console.log('Link for the given key is not available in the list');
            return keyLink;
        }

        //Point backward pointer to new link
        if(nextLink){
            nextLink.previous = newLink;    
        }
        
        //Point forward pointer to new link
        keyLink.next = newLink;

        //Add forward pointer for new link.
        newLink.next = nextLink;

        //Add backward pointer for new link.
        newLink.previous = keyLink;

        //Increment length.
        this._length++;

        return newLink;
    },

    displayForward: function() {
        var display = [],
            currentLink = this.head;

        while(currentLink) {
            display.push(JSON.stringify(currentLink.data));
            currentLink = currentLink.next;
        }

        return display.join(' => ');
    },

    displayBackward: function() {
        var display = [],
            currentLink = this.head;

        //Traverse to the end
        while(currentLink.next) {
            currentLink = currentLink.next;
        }

        while(currentLink) {
            display.push(JSON.stringify(currentLink.data));
            currentLink = currentLink.previous;
        }

        return display.join(' => ');
    },

    toString: function() {
        var display = [],
            currentLink = this.head;
        while(currentLink) {
            display.push(JSON.stringify(currentLink.data));
            currentLink = currentLink.next;
        }

        return display.join(' <=> ');
    }
}

module.exports = DoublyLinkedList;