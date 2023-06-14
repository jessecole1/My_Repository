// A parentheses string is valid if and only if:

// It is the empty string,
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.
// You are given a parentheses string s. In one move, you can insert a parenthesis at any position of the string.

// For example, if s = "()))", you can insert an opening parenthesis to be "(()))" or a closing parenthesis to be "())))".
// Return the minimum number of moves required to make s valid.


const subArrayRanges = function(s) {
    let stack = [];
    let stackDiff = [];
    let lowNum, highNum = 0;
    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]);
        stack.sort((a,b) => {return a-b});
        lowNum = stack[0];
        highNum = stack[stack.length-1];
        stackDiff.push(highNum - lowNum);
        lowNum, highNum = 0;
    }
    console.log(stackDiff);
    
}

console.log(subArrayRanges([1,2,3]));