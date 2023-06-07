

const calPoints = function(operations) {
    const parens = "+ D C";
    let sum = 0;
    stack = [];
    for (let i = 0; i < operations.length; i++) {
        if (parens.includes(operations[i])) {
            if (operations[i] === "+") {
                let x = parseInt(stack[stack.length-1]);
                let y = parseInt(stack[stack.length-2]);
                stack.push(x + y);
            }
            else if (operations[i] === "D") {
                let x = parseInt(stack[stack.length-1]);
                stack.push(x*2);
            }
            else if (operations[i] === "C") {
                stack.pop();
            }
        } else {
            stack.push(parseInt(operations[i]));
        }
    }
    for (let i = 0; i < stack.length; i++) {
        sum += stack[i];
    }
    return sum;
}

console.log(calPoints(["1","C"]));