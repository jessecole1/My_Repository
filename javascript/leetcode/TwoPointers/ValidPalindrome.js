// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.


const isPalindrome = function(s) {
    let stack = [];
    let sLength = s.length-1;
    for (let i = 0; i <= sLength; i++) {
        let x = s[i].toLowerCase();
        if (x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122 || x.charCodeAt(0) >= 48 && x.charCodeAt(0) <= 57) {
            stack.push(x);
        }
    }
    let i = 0;
    let j = stack.length - 1;
    while (i < j) {
        if (stack[i] !== stack[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};

console.log(isPalindrome(".P"));