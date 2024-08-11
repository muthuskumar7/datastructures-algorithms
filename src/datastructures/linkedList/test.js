'use strict';

var beautify = require('../../util/beautify');

var SinglyLinkedList = require('./singlyLinkedList'),
    DoublyLinkedList = require('./doublyLinkedList'),
    CircularLinkedList = require('./circularLinkedList');


/** Test singlyLinkedList **/
function testSinglyLinkedList() {
    var singlyLinkedList = new SinglyLinkedList();
    
    singlyLinkedList.addFirst('Muthu');
    singlyLinkedList.addFirst('Kumar');
    singlyLinkedList.addFirst('Bhagavath');
    singlyLinkedList.addFirst('Suvetha');

    console.log('SinglyLinkedList ', singlyLinkedList.toString()); 

    // singlyLinkedList.removeFirst();
    // singlyLinkedList.removeFirst();
    // singlyLinkedList.removeFirst();
    // singlyLinkedList.remove();

    var dataOfNodeToRemove = 'Muthu',
        nodeToRemove = null,
        currNode = singlyLinkedList.head;
    while(currNode) {
        if(currNode.data === dataOfNodeToRemove) {
            nodeToRemove = currNode;
            break;
        }
        currNode = currNode.next;
    }
    console.log('currNode ',  JSON.stringify(nodeToRemove));
    singlyLinkedList.removeNode(nodeToRemove);

    // singlyLinkedList.reverse();
    console.log('SinglyLinkedList ', singlyLinkedList.toString()); 
}


/** Test DoublyLinkedList **/
function testDoublyLinkedList() {
    var doublyLinkedList = new DoublyLinkedList();

    doublyLinkedList.add('1', 'Muthu');
    doublyLinkedList.add('2', 'Kumar');
    doublyLinkedList.add('3', 'Bhagavath');
    doublyLinkedList.add('4', 'Suvetha');

    console.log('length', doublyLinkedList._length);
    console.log('DoublyLinkedList ', doublyLinkedList.toString());

    // doublyLinkedList.remove();
    // doublyLinkedList.remove();
    // doublyLinkedList.remove();

    doublyLinkedList.addAfter('3', {key: '5', value: 'Amal'});

    console.log('length', doublyLinkedList._length);
    console.log('DoublyLinkedList ', doublyLinkedList.toString());

    // console.log('DoublyLinkedList ', doublyLinkedList.displayForward());
    // console.log('DoublyLinkedList ', doublyLinkedList.displayBackward());
}

/** Test CircularLinkedList **/
function testCircularLinkedList() {
    var circularLinkedList = new CircularLinkedList();
    circularLinkedList.add('1', 'Muthu');
    circularLinkedList.add('2', 'Kumar');
    circularLinkedList.add('3', 'Bhagavath');
    circularLinkedList.add('4', 'Suvetha');

    console.log('CircularLinkedList : ', circularLinkedList.toString());

    circularLinkedList.reverse();
    console.log('Reversed CircularLinkedList : ', circularLinkedList.toString());

    // console.log('CircularLinkedList : ', circularLinkedList.head);
    // console.log('CircularLinkedList : ', circularLinkedList.head.next);
}



module.exports = function testLinkedList() {

    
    /* SinglyLinkedList */
    beautify(testSinglyLinkedList);

    /* DoublyLinkedList */
    // beautify(testDoublyLinkedList);

    // /* CircularLinkedList */
    // beautify(testCircularLinkedList);



};