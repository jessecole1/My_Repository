// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
const isValid = function(s) {
    let dict = {};
    let x = true;
    let y = true;
    class Node {
        constructor(data) {
            this.data = data;
            this.next = null;
            this.id = null;
            this.checked = false;
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
                this.head.id = 0;
                return this;
            }
            newNode.next = this.head;
            this.head = newNode;
            this.head.id = this.head.next.id + 1;
            return this;
        }
        display() {
            let listString = [];
            if (!this.head) {
                return "";
            }
            listString.push(this.head.checked);
            let runner = this.head.next;
            while (runner !== null) {
                if (runner.checked == false) {
                    return false
                }
                listString.push(runner.checked);
                runner = runner.next;
            }
            listString.reverse();
            return true;
        }

        check() {
            let runner = this.head;
            while (runner !== null) {
                if (runner.data.charCodeAt(0) == 41) {
                    let runnerTwo = this.head;
                    while (runnerTwo !== null) {
                        if (runnerTwo.data.charCodeAt(0) === 40 && runnerTwo.checked === false && runnerTwo.id < runner.id) {
                            runnerTwo.checked = true;
                            runner.checked = true;
                            break;
                        }
                        runnerTwo = runnerTwo.next;
                    }
                }
                if (runner.data.charCodeAt(0) == 93) {
                    let runnerTwo = this.head;
                    while (runnerTwo !== null) {
                        if (runnerTwo.data.charCodeAt(0) === 91 && runnerTwo.checked === false && runnerTwo.id < runner.id) {
                            runnerTwo.checked = true;
                            runner.checked = true;
                            break;
                        }
                        runnerTwo = runnerTwo.next;
                    }
                }
                if (runner.data.charCodeAt(0) == 125) {
                    let runnerTwo = this.head;
                    while (runnerTwo !== null) {
                        if (runnerTwo.data.charCodeAt(0) === 123 && runnerTwo.checked === false && runnerTwo.id < runner.id) {
                            runnerTwo.checked = true;
                            runner.checked = true;
                            break;
                        }
                        runnerTwo = runnerTwo.next;
                    }
                }
                runner = runner.next;
            }
        }
    }
    let newSLL = new SLL();
    for (let i = 0; i < s.length; i++) {
        newSLL.push(s[i]);
    }
    newSLL.check();

    console.log(newSLL.display());



};

isValid("([{])");