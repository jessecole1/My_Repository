

const twoSum = function(nums, target) {
    let arr = [];
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let operand = target - nums[i];
        if (map.has(operand)) {
            arr.push(map.get(operand), i);
            return arr;
        }
        map.set(nums[i], i);
    }
    return false;
}


console.log(twoSum([3,3], 6));