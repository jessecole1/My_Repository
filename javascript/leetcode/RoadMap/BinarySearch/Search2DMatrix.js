const searchMatrix = function(matrix, target) {
    let leftIndex = 0;
    let rightIndex = matrix.length-1;
    while (leftIndex <= rightIndex) {
        let midIndex = Math.ceil((leftIndex + rightIndex)/2);
        if (matrix[midIndex][0] <= target && matrix[midIndex][matrix[midIndex].length - 1] >= target) {
            let left = matrix[midIndex][0];
            let right = matrix[midIndex][matrix[midIndex].length - 1];
            while (left <= right) {
                let mid = Math.ceil((left + right)/2);
                if (mid === target) {
                    if (matrix[midIndex].includes(mid)) {
                        return true;
                    } else {
                        return false;
                    }
                }
                if (mid > target) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
        }
        if (matrix[midIndex][0] > target) {
            rightIndex = midIndex - 1;
        } else if (matrix[midIndex][matrix[midIndex].length - 1] < target) {
            leftIndex = midIndex + 1;
        }
    } 
    return false;
}

console.log(searchMatrix([[-10,-8,-6,-4,-3],[0,2,3,4,5],[8,9,10,10,12]], 0));