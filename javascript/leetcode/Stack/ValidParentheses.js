// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
const isValid = function(s) {
    let x = true;
    let y = true;
    class Node {
        constructor(data) {
            this.data = data;
            this.next = null;
        }
    }
    class SLL {
        constructor() {
            this.head = null;
        }
        push(value) {
            let newNode = new Node(value);
            if(!this.head) {
                this.head = newNode;
                return this;
            }
            console.log("etnering new data: ");
            console.log(newNode.data);
            if (newNode.data === "(" || newNode.data === "[" || newNode.data === "{") {
                
            }
            newNode.next = this.head;
            this.head = newNode;
            return this;
        }
        // display() {
        //     let listString = [];
        //     if (!this.head) {
        //         return "";
        //     }
        //     listString.push(this.head.data);
        //     let runner = this.head.next;
        //     while (runner !== null) {
        //         listString.push(runner.data);
        //         runner = runner.next;
        //     }
        //     listString.reverse();
        //     console.log();
        //     console.log(listString);
        // }
    }
    let newSLL = new SLL();
    for (let i = 0; i < s.length; i++) {
        newSLL.push(s[i]);
    }
    console.log(newSLL);
    // newSLL.display();



};

isValid("{}()");