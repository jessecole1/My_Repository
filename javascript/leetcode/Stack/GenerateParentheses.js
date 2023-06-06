// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]


const generateParentheses = function(n) {
    let stack = [];
    let string = "";
    const parens = "()";
    let i = 0;
    while (i < n) {
        const left = "(";
        const right = ")";
        string += left;
        string += right;
        stack.push(string);
        string = "";
        i++;
    }
    console.log(stack);
}

generateParentheses(2);