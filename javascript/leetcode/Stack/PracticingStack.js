const MAX_SIZE = 10;
let stack = [];
top = -1;

// ---------------------------------------------------------------
// Pushing an element
const isFull = function(top) {
    if (top === MAX_SIZE - 1) {
        return true;
    } else {
        return false;
    }
}

const push = function(stack, top, data) {
    if (isFull(top) == true) {
        console.log("Stack is full - " + data + " not added.")
    } else {
        top += 1;
        stack[top] = data;
    }
    return top;
}
// ---------------------------------------------------------------
// Popping an element
const isEmpty = function(top) {
    if (top === -1) {
        return true;
    } else {
        return false;
    }
}

const pop = function(stack, top) {
    if (isEmpty(top) === true) {
        return ("Stack is empty - nothing to pop.")
    } else {
        poppedItem = stack[top];
        top -= 1
    }
    return (poppedItem, top)
}
