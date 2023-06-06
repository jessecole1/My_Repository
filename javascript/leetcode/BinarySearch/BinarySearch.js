

const binarySearch = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
    }
    return -1;
}

console.log(binarySearch([-1,0,3,5,9,12], 2));