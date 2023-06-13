// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]


const generateParentheses = function(n) {
    let stack = [];
    let openCount = 0; 
    let closeCount = 0;
    let start = "(";
    let end = ")";
    let temp = "";     
    i = 0;
    let check = function(a, b) {
        
    }
    while (i < n) {
        if (closeCount < openCount) {
            temp += end;
            closeCount++;
        } if (openCount < n) {
            temp += start;
            openCount++;
            i--;
        }
         else {
            i++;
        }
        // if (closeCount <= openCount + 1) {
        //     temp += end;
        //     closeCount++;
        // }
        // while (openCount > closeCount && openCount < n && closeCount < n) {
        //     temp += start;
        //     openCount++;
        //     temp = "";
        // }
        
    }
    console.log(temp);

}
generateParentheses(2);