// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

const strings = ["hello", "elloh","lloeh","hey","yeh","ehy"];

var groupAnagrams = function(strs) {
    let map = [];
    for (let i = 0; i < strs.length; i++) {
        let temp = [];
        for (let j = 0; j < strs[i].length; j++) {
            if (i > 0) {
                
            }
            temp.push(strs[i][j]);
        }
        map.push(temp);
        // console.log(map.includes(strs[i-1])[i]);
    }
    return map;
};

console.log(groupAnagrams(strings));
// groupAnagrams(strings);