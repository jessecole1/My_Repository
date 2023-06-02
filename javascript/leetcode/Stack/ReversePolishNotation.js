const evalRPN = function(tokens) {
    let stack = [];
    let operators = "+ - * /";
    let result = 0;

    const add = (a , b) => {
        intOne = parseInt(a);
        if (b === undefined) {
            let res = intOne;
            result += res;
        } else {
            intTwo = parseInt(b);
            console.log(intTwo);
            result = intOne + intTwo;
        }
    }
    const subtract = function(a,b) {
        intOne = parseInt(a);
        if (b === undefined) {
            let res = intOne;
            result -= res;
        } else {
            intTwo = parseInt(b);
            result = intTwo - intOne;
        }
    }
    const times = function(a,b) {
        return a*b;
    }
    const divide = function(a,b) {
        return a/b;
    }

    for (let i = 0; i < tokens.length; i++) {
        stack.push(tokens[i]);

        if (operators.includes(tokens[i])) {
            if (tokens[i] === "+") {
                let x = tokens[i-2];
                let y = tokens[i-1];
                if (isNaN(x)) {
                    add(y, result);
                }else {
                    add(x,y);
                }
                stack.pop();
                stack.pop();
                stack.pop();
            }
            console.log("result before: " + result);
            if (tokens[i] === "-") {
                let x = tokens[i-2];
                let y = tokens[i-1];
                if (isNaN(x)) {
                    subtract(y, result);
                } else {
                    subtract(x, y);
                }
                stack.pop();
                stack.pop();
                stack.pop();
            }
        }
    }
    console.log(result);
    return result;

};

evalRPN(["10","10","+","5","5","-","+"]);