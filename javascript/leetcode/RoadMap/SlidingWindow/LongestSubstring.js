

const lengthOfLongestString = function(s) {

    let stack = [];
    let l = 0; 
    let r = 1;
    let longestString = 0;
    let count = 0;
    if (s.length > 1) {
        while (r < s.length) {
            // console.log(l + " | " + r + " |x| " + s[l] + " | " + s[r]);
            // console.log(count);
            if (!stack.includes(s[l])) {
                stack.push(s[l]);
                count++;
            }
            if (!stack.includes(s[r])) {
                stack.push(s[r]);
                r++;
                count++;
            } else {
                if (count > longestString) {
                    longestString = count;
                }
                count = 0;
                stack = [];
                l++;
                r = l + 1;
            }
            if (count > longestString) {
                longestString = count;
            }
        }
        return longestString;
    } else {
        return s.length;
    }

}

console.log(lengthOfLongestString("bbbbb"));
                                // 012345678