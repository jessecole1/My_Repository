var longestConsecutive = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    let newArr = [];
    newArr = nums.sort(function(a,b) {return a - b})
    let countArr = [];
    let count = 1;
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i+1] - newArr[i] === 0 ) {
            continue;
        } else if (newArr[i+1] - newArr[i] === 1){
            count++;
        } else {
            countArr.push(count);
            count = 1;
        }
    }
    countArr.reverse(countArr.sort(function(a,b) {return a-b}));
    return countArr[0];
    // return countArr;
};

console.log(longestConsecutive([100,4,200,1,3,2]));