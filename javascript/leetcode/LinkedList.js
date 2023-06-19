class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    addFront(value) {
        let new_node = new Node(value);
        if(!this.head) {
            this.head = new_node;
            this.size++;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        this.size++;
        return this;
    }
    addBack(value) {
        let new_node = new Node(value);
        let current;
        if (!this.head) {
            this.head = new_node;
            this.size++;
            return this;
        }
        current = this.head;
        while (current.next) {
            current = current.next;
        }
        this.size++;
        return current.next = new_node;
    }

    // My way
    removeFront() {
        if (this.head === null) {
            return false;
        }
        this.head = this.head.next;
        this.size--;
        return this;
    }

    // Instructors way
    removeFrontTwo() {
        if (this.head === null) {
            return false;
        }
        const temp = this.head.data;
        this.head = this.head.next;
        this.size--;
        return temp;
    }

    front() {
        if (this.head === null) {
            return null;
        }
        return this.head.data;
    }
    display() {
        let listString = '';
        if(this.head == null) {
            return "";
        }
        
        listString += this.head.data;
        let runner = this.head.next;
        while (runner != null) {
            listString += ", " + runner.data;
            runner = runner.next;
        }
        console.log(listString);
        return listString;
    }

    reverseList() {
        let prev = null;
        while(this.head !== null) {
            let nextNode = this.head.next;
            this.head.next = prev;
            prev = this.head;
            this.head = nextNode;
        }
        return prev;
    }

    insertAt(value, index) {
        if (index > 0 && this.size < index) {
            console.log("Index number too big for this size. Number not added.")
            return;
        }
        let newNode = new Node(value);
        if (index === 0) {
            this.addFront(value);
            return this;
        }

        let current = this.head;
        let count = 0;
        let previous;
        while (count < index) {
            previous = current;
            count++;
            current = current.next;
        }
        previous.next = newNode;
        newNode.next = current;
        return this;
    }
}

const mergeTwoLists = function(list1, list2) {
    console.log(list1, list2);
}

SLL1 = new SLL();
SLL1.addBack(1);
SLL1.addBack(3);
SLL1.addBack(5);
SLL1.addBack(7);
SLL1.insertAt(10,5);
SLL1.display();

SLL2 = new SLL();
SLL2.addFront(2);
SLL2.addFront(4);
SLL2.addBack(6);

// SLL2.display();

// mergeTwoLists(SLL1, SLL2);