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
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
        return;
    }

    addList(data) {
        for (let i = 0; i < data.length; i++) {
            let newNode = new Node(data[i]);
            if (!this.head) {
                this.head = newNode;
            } else {
                let current = this.head;
                while (current.next) {
                    current = current.next;
                }
                current.next = newNode;
            }
        }
        return this;
    }

    display() {
        let string = "";
        if (!this.head) {
            return "";
        }
        string += this.head.data;
        let runner = this.head.next;
        while (runner) {
            string += " " + runner.data;
            runner = runner.next;
        }
        console.log(string);
        return string;
    }
}



const mergeTwoLists = function(list1, list2) {

    const createList = function(list) {
        let i = 0;
        let listNode = new Node(list[i]);
        for (let i = 1; i < list.length; i++) {
            let nextNode = new Node(list[i]);
            let currentNode = listNode;
            while(currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = nextNode;
        }
        return listNode;
    }
    
    let l1 = createList(list1);
    let l2 = createList(list2);
    // console.log(l1);
    // console.log(l2);

    
    let curr = new Node();
    let dummy = curr;

    while (l1 && l2) {
        if (l1.data < l2.data) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    
    if (l1) {
        curr.next = l1;
        l1 = l1.next;
    }
    if (l2) {
        curr.next = l2;
        l2 = l2.next;
    }
    while(dummy.next) {
        console.log(dummy);
        dummy = dummy.next;
    }
    return dummy.next;
}





mergeTwoLists([1,2,4],[1,3,4]);






// const mergeTwoLists = function(list1, list2) {
//     const SLL1 = new LinkedList();
//     SLL1.addList(list1);
//     const SLL2 = new LinkedList();
//     SLL2.addList(list2);

//     let thirdListSize = list1.length + list2.length;
//     let SLL3 = new LinkedList();
//     let runner = 0;
    
    
//     let SLL1head = SLL1.head;
//     let SLL2head = SLL2.head;
//     while (runner < thirdListSize) {
//         console.log(runner);
//         console.log(SLL3);
//         if (SLL1head === null) {
//             SLL3.addBack(SLL2head.data);
//             SLL2head = SLL2head.next;
//             runner++;
//             continue;
//         }
//         if (SLL2head === null) {
//             SLL3.addBack(SLL1head.data);
//             SLL1head = SLL1head.next;
//             runner++;
//             continue;                                       // [1, 2, 4]
//         }                                                   // [1, 3, 4]
//         if (SLL1head.data < SLL2head.data) {
//             SLL3.addBack(SLL1head.data);
//             SLL1head = SLL1head.next;
//             runner++;
//         } else if (SLL2head.data < SLL1head.data) {
//             SLL3.addBack(SLL2head.data);
//             SLL2head = SLL2head.next;
//             runner++;
//         } else {
//             SLL3.addBack(SLL1head.data);
//             SLL3.addBack(SLL2head.data);
//             SLL1head = SLL1head.next;
//             SLL2head = SLL2head.next;
//             runner++;
//             runner++;
//         }
//     }
//     console.log(SLL3.display());
//     return SLL3.display();
//     // console.log(SLL3);
// }