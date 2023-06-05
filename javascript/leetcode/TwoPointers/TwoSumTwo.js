

const twoSum = function(numbers, target) {
    let arr = [];
    let i = 0; 
    let j = numbers.length-1;
    while (i < numbers.length) {
        while (j > 0) {
            sum = numbers[i] + numbers[j];
            if (sum === target) {
                arr.push(i+1, j+1);
                return arr;
            }
            if (sum < target) {
                i++;
            }
            if (sum > target) {
                j--;
            }
        }
    }
}


console.log(twoSum([2,4,6,7], 10));