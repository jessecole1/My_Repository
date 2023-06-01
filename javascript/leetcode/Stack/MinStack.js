// I feel like this accomplished what the problem wants


class MinStack {
    constructor() {
        let stack = [];
        let min = [];
        this.stack = stack;
        this.minValue = min;
    }
    push(value) {
        this.stack.push(value);
        for (let i = 0; i < this.stack.length; i++) {
            console.log(this.stack[i] + " " + value);
            if (this.stack[i] < value) {
                let small = value;
                // console.log("Value isn't smallest: " + small);
                for (let j = 0; j < this.stack.length; j++) {
                    if (this.stack[j] < small) {
                        console.log("here?");
                        small = this.stack[j];
                    }
                }
                this.minValue.push(small);
                return;
            }
        }
        this.minValue.push(value);
        // console.log("pushed value: " + value);
        return;
    }
    
    pop() {
        if (this.stack.length ===  0) {
            return null
        }
        this.stack.pop();
        this.minValue.pop();
    }
    
    top() {
        console.log(this.stack[this.stack.length-1]);
        return this.stack[this.stack.length-1];
    }
    
    getMin() {
        console.log(this.minValue[this.minValue.length -1]);
        return this.minValue[this.minValue.length -1];
    }


};
    
    

let obj = new MinStack();
obj.push(85);
obj.push(-99);
obj.push(67);
obj.getMin();
console.log(obj);