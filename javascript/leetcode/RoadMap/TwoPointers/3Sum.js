

const threeSum = function(nums) {
    let arr = [];
    let i = nums.length-1;
    for (let k = 0; k < nums.length; k++) {
        for (let j = 0; j < nums.length; j++) {
            console.log(nums[i], nums[k], nums[j]);
            if (i !== j && i !== k && k !== j) {
                if (0 === nums[i] + nums[j] + nums[k]) {
                    arr.push(nums[i], nums[k], nums[j]);
                }
            }
        }
        i--;
        k, j = -1;
        if (i === 0) {
            break;
        }
    }
    return arr;
}

console.log(threeSum([-1,0,1,2,-1,-4]));