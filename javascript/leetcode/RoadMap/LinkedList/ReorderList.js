class Node {
    constructor(data) {
        this.data = data;
        this.next = null; 
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    addBack(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.size++;
            return this;
        }
        let current = this.head;
        // console.log(current);
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
        return this;
    }

    removeBack() {
        if (!this.head) {
            return false;
        }
        let current = this.head;
        while (current.next) {

        }
    }
}

const addList = function(list) {
    let linkedList = new LinkedList();
    for (let i = 0; i < list.length; i++) {
        linkedList.addBack(list[i]);
    }
    return linkedList;
}

// const reorderList = function(list) {

//     const newList = new LinkedList();

//     let current = list.head;
//     let prev;

//     let i = 0;

//     while (i < 2) {

//     }

//     while (current.next) {
//         prev = current;
//         current = current.next;
//     }
//     console.log(prev);
//     console.log(current);
//     newList.addBack(current.data);
    
// }

const reverseList = function(list) {
    console.log(list);
    let prev = null;
    while (list.head !== null) {
        let nextNode = list.head.next;
        list.head.next = prev;
        console.log("2: ");
        console.log(list);
        prev = list.head;
        list.head = nextNode;
    }
    // console.log(prev);
    return prev;
}

const ll1 = new LinkedList();
ll1.addBack(1);
ll1.addBack(2);
ll1.addBack(3);
ll1.addBack(4);
ll1.addBack(5);
// console.log(ll1);
reverseList(ll1);