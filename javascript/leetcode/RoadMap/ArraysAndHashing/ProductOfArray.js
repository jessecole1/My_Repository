// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

const productExceptSelf = function(nums) {
    const newArr = [];
    for (let i = 0; i < nums.length; i++) {
        let temp = 1;
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                temp *= nums[j];
            } else {
                continue;
            }
        }
        if (temp == 0) {
            newArr.push(Math.abs(temp));
        } else {
            newArr.push(temp);
        }
    }
    return newArr;
};

// productExceptSelf([1,2,3,4]);
console.log(productExceptSelf([1,2,3,4]));