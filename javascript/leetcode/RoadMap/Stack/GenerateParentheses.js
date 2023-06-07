// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]


const generateParentheses = function(n) {
    let str = "";
    let openParen = "(";
    let closeParen = ")";
    let stack = [];
    let open, close = 0;
    for (let i = 0; i < n; i++) {
        if (open === close) {
            str += openParen;
            open++;
        }
    }

}
generateParentheses(2);