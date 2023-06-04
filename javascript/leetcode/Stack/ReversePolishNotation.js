const evalRPN = function(tokens) {
    let stack = [];
    let operators = "+ - * /";
    
    const add = (x) => {
        stack.push(x);
    }

    for (let i = 0; i < tokens.length; i++) {
        console.log(stack);
        stack.push(tokens[i]);
        if (operators.includes(tokens[i])) {
            let z = stack[stack.length-1];
            stack.pop();
                let x = parseInt(stack[stack.length-1]);
                let y = parseInt(stack[stack.length-2]);
                let c = 0;
                if (z === "+") {
                    c += x;
                    c += y;
                } else if (z === "-") {
                    c -= x;
                    c -= y;
                } else if (z === "*") {
                    c = 1;
                    c *= x;
                    c *= y;
                } else if (z === "/") {
                    c = 1;
                    c /= x;
                    c /= y;
                }
                    stack.pop();
                    stack.pop();
                    add(c);
                    c = 0;
        }
    }
    console.log(stack);
    return stack;

};

evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]);